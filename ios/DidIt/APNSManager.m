//
//  APNSManager.m
//  DidIt
//
//  Created by James Campbell on 8/10/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

#import "APNSManager.h"
#import "Didit-Swift.h"

static NSString * const APNSManagerRemoteNotificationActionEvent = @"remoteNotificationAction";

@implementation APNSManager

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(registerForRemoteNotifications)
{
  [[UIApplication sharedApplication] registerUserNotificationSettings];
}

- (NSArray<NSString *> *)supportedEvents {
  return @[ APNSManagerRemoteNotificationActionEvent ];
}

- (void)startObserving {
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(handleActionPressed:) name:APNSManagerRemoteNotificationActionEvent object:nil];
}

- (void)stopObserving {
  [[NSNotificationCenter defaultCenter] removeObserver:self];
}

+ (void)actionPressed:(void (^)())completionHandler {
  [[NSNotificationCenter defaultCenter] postNotificationName:APNSManagerRemoteNotificationActionEvent object:completionHandler];
}

- (void)handleActionPressed:(NSNotification *)notification
{
  [self sendEventWithName:APNSManagerRemoteNotificationActionEvent body:notification.object];
}

@end