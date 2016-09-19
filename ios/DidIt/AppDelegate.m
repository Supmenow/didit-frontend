/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <Fabric/Fabric.h>
#import <DigitsKit/DigitsKit.h>
#import <SimulatorRemoteNotifications/UIApplication+SimulatorRemoteNotifications.h>

#import "CodePush.h"
#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"
#import "RCTPushNotificationManager.h"
#import "APNSManager.h"
#import "DidIt-Swift.h"
#import "lelib.h"

@interface AppDelegate()

@property (nonatomic, strong) NSDictionary *lastPush;
@property (nonatomic, strong) BackgroundTask *currentBackgroundTask;

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [Fabric with:@[[Digits class]]];
  
  LELog* logger = [LELog sharedInstance];
  logger.token = @"37393658-a793-41e4-931b-d394bb764d85";
  
#if (TARGET_OS_SIMULATOR)
  [application listenForRemoteNotifications];
#endif
  
  NSURL *jsCodeLocation;

#if DEBUG
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
#else
  jsCodeLocation = [CodePush bundleURL];
#endif
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"DidIt"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [UIColor clearColor];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(triggerNotification) name:@"appMounted" object:nil];
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(finishCurrentBackgroundTask) name:@"endBackgroundTask" object:nil];
  
  return YES;
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
  application.applicationIconBadgeNumber = 0;
}

// Required to register for notifications
- (void)application:(UIApplication *)application didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings
{
  [RCTPushNotificationManager didRegisterUserNotificationSettings:notificationSettings];
}

// Required for the register event.
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
  [[LELog sharedInstance] log:[NSString stringWithFormat:@"Token Updated %@", [deviceToken description]]];
  [RCTPushNotificationManager didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

// Required for the notification event.
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)notification
{
  
  [RCTPushNotificationManager didReceiveRemoteNotification:notification];
}

// Required for the localNotification event.
- (void)application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification
{
  [RCTPushNotificationManager didReceiveLocalNotification:notification];
}

// Notification Action
- (void)application:(UIApplication *)application handleActionWithIdentifier:(NSString *)identifier forRemoteNotification:(NSDictionary *)userInfo completionHandler:(void (^)())completionHandler {
  [self application:application handleActionWithIdentifier:identifier forRemoteNotification:userInfo withResponseInfo:@{} completionHandler:completionHandler];
}

- (void)application:(UIApplication *)application handleActionWithIdentifier:(NSString *)identifier forRemoteNotification:(NSDictionary *)userInfo withResponseInfo:(NSDictionary *)responseInfo completionHandler:(void (^)())completionHandler {
  
  [BackgroundTask run:application handler:^(BackgroundTask * _Nonnull task) {
    
    self.lastPush = @{
                      @"identifier": identifier,
                      @"userInfo": userInfo
                      };
    
    [APNSManager actionPressed:self.lastPush];
    
    self.currentBackgroundTask = task;
  }];
  
  completionHandler();
}

- (void)finishCurrentBackgroundTask {
  
  if (self.currentBackgroundTask) {
    NSLog(@"Background task ended");
    [self.currentBackgroundTask end];
  }
}

- (void)triggerNotification {
  if (self.lastPush) {
    [APNSManager actionPressed:self.lastPush];
  }
}

- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
{
  NSLog(@"%@", error);
}

@end



