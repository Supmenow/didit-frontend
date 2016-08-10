//
//  RCTExplosionManager.m
//  DidIt
//
//  Created by James Campbell on 8/5/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

#import "RCTBridgeModule.h"

@interface RCTExplosionManager : NSObject <RCTBridgeModule>

@end

@implementation RCTExplosionManager

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(registerForRemoteNotifications)
{
  RCTLogInfo(@"Pretending to create an event");
}

@end
