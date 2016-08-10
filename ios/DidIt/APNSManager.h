//
//  APNSManager.h
//  DidIt
//
//  Created by James Campbell on 8/10/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#ifndef APNSManager_h
#define APNSManager_h

#import "RCTEventEmitter.h"

// Class for working around built in React Native class
// not allowing you to handle actions and register categories.
//
// FIXME: Send a PR to Facebook to allow this once we un-hardcode
//        things.
//
// FIXME: Abstract this away from javascript - it controls flow - this controls enviromental specifics.
//
@interface APNSManager : RCTEventEmitter

+ (void)actionPressed:(void (^)())completionHandler;

@end

#endif /* APNSManager_h */
