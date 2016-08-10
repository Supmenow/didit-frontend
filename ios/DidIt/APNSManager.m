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
  
}

- (void)stopObserving {
  
}

+ (void)actionPressed:(void (^)())completionHandler {
  
}

- (void)handleActionPressed:(void (^)())completionHandler
{
  [self sendEventWithName:APNSManagerRemoteNotificationActionEvent body:completionHandler];
}

@end