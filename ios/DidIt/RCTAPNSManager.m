//
//  RCTAPNSManager.m
//  DidIt
//
//  Created by James Campbell on 8/10/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"

@interface RCTAPNSManager : NSObject <RCTBridgeModule>

@end

@implementation RCTAPNSManager

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(registerForRemoteNotifications)
{
  NSLog(@":D");
  
  
}

@end