//
//  Reply.swift
//  DidIt
//
//  Created by James Campbell on 9/19/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

import Foundation
import Alamofire


let backgroundManager: Alamofire.Manager = {
  return Alamofire.Manager(configuration: NSURLSessionConfiguration.backgroundSessionConfigurationWithIdentifier("com.sup.forever-beta.background"))
}()

@objc class Reply: NSObject {
  
  static func sendReply(token: String, userID: String, type: String, emoji: String, done: () -> Void) {
    backgroundManager.request(.POST, "https://didit.wenow.co/api/v1/reply", headers: [
      "api-key": token
      ], parameters: [
        "replyToID": userID,
        "message": emoji,
        "image": type,
        "sound": type + ".wav"
      ], encoding: .JSON)
      .response { (_, _, _, _) in
        done()
    }
  }
  
  static func sendEyeroll(token: String, userID: String, done: () -> Void) {
    sendReply(token, userID:userID, type:"eyeroll", emoji: "🙄", done:done)
  }
  
  static func sendHighFive(token: String, userID: String, done: () -> Void) {
    sendReply(token, userID:userID, type:"highfive", emoji: "🙌", done:done)
  }
}
