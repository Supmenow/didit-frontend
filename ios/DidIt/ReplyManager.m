//
//  ReplyManager.m
//  DidIt
//
//  Created by James Campbell on 9/19/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "RCTViewManager.h"
#import <Foundation/Foundation.h>
#import "Didit-Swift.h"

@interface ReplyManager : NSObject <RCTBridgeModule>

@end

@implementation ReplyManager

RCT_EXPORT_MODULE()


RCT_EXPORT_METHOD(sendEyeRoll:(NSString *)apiKey user:(NSString *)user) {
  
  [Reply sendEyeroll:apiKey userID:user done:^{
    [[NSNotificationCenter defaultCenter] postNotificationName:@"endBackgroundTask" object:nil];
  }];
}

RCT_EXPORT_METHOD(sendHighFive:(NSString *)apiKey user:(NSString *)user) {
  
  [Reply sendHighFive:apiKey userID:user done:^{
    [[NSNotificationCenter defaultCenter] postNotificationName:@"endBackgroundTask" object:nil];
  }];
}

@end
