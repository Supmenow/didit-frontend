//
//  NotificationManager.h
//  DidIt
//
//  Created by James Campbell on 9/19/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#ifndef NotificationManager_h
#define NotificationManager_h

#import <Foundation/Foundation.h>

@interface NotificationManager : NSObject <RCTBridgeModule>

@end

//  NotificationManager.m
#import "NotificationManager.h"

@implementation NotificationManager

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(postNotification:(NSString *)name) {
  [[NSNotificationCenter defaultCenter] postNotificationName:name object:nil userInfo:nil];
}

@end

#endif /* NotificationManager_h */
