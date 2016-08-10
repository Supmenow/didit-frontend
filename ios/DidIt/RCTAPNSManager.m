//
//  RCTAPNSManager.m
//  DidIt
//
//  Created by James Campbell on 8/10/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

#import "RCTBridgeModule.h"
#import "Didit-Swift.h"

@interface RCTAPNSManager : NSObject <RCTBridgeModule>

@end

@implementation RCTAPNSManager

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(registerForRemoteNotifications)
{
  [[UIApplication sharedApplication] registerUserNotificationSettings];
}

@end