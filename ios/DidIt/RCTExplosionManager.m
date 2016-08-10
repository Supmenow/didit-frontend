//
//  RCTExplosionManager.m
//  DidIt
//
//  Created by James Campbell on 8/5/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

#import "RCTViewManager.h"
#import "DidIt-Swift.h"

@interface RCTExplosionManager : RCTViewManager

@end

@implementation RCTExplosionManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(sprite, UIImage)

- (UIView *)view {
  return [[ExplosionView alloc] initWithFrame:CGRectZero];
}

@end
