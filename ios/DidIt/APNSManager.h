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
// FIXME: Can we contribute something for this ?
//
@interface APNSManager : RCTEventEmitter

+ (void)actionPressed:(NSDictionary *)userInfo;

@end

#endif /* APNSManager_h */
