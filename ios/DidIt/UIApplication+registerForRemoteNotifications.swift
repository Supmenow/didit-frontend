//
//  UIApplication+registerForRemoteNotifications.swift
//  DidIt
//
//  Created by James Campbell on 8/10/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

import Foundation
import UIKit

extension UIApplication {
  
  @objc func registerUserNotificationSettings() {
    
    guard #available(iOS 8.0, *) else {
      return
    }
    
    let notificationActionHighFive :UIMutableUserNotificationAction = UIMutableUserNotificationAction()
    notificationActionHighFive.identifier = "HIGH_FIVE_IDENTIFIER"
    notificationActionHighFive.title = "🙌"
    notificationActionHighFive.authenticationRequired = false
    notificationActionHighFive.activationMode = UIUserNotificationActivationMode.Background
    
    let notificationActionEyeRoll :UIMutableUserNotificationAction = UIMutableUserNotificationAction()
    notificationActionEyeRoll.identifier = "EYE_ROLL_IDENTIFIER"
    notificationActionEyeRoll.title = "🙄"
    notificationActionEyeRoll.authenticationRequired = false
    notificationActionEyeRoll.activationMode = UIUserNotificationActivationMode.Background
    
    let notificationCategory:UIMutableUserNotificationCategory = UIMutableUserNotificationCategory()
    notificationCategory.identifier = "REPLY_CATEGORY"
    notificationCategory.setActions([notificationActionHighFive, notificationActionEyeRoll], forContext: UIUserNotificationActionContext.Default)
    
    registerUserNotificationSettings(UIUserNotificationSettings(forTypes: [UIUserNotificationType.Sound, UIUserNotificationType.Alert,
      UIUserNotificationType.Badge], categories: [notificationCategory]))
  }
}