//
//  NotificationManager.m
//  DidIt
//
//  Created by James Campbell on 9/19/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RCTViewManager.h"
#import <Foundation/Foundation.h>

@interface NotificationManager : NSObject <RCTBridgeModule>

@end

@implementation NotificationManager

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(postNotification:(NSString *)name) {
  [[NSNotificationCenter defaultCenter] postNotificationName:name object:nil userInfo:nil];
}

@end
