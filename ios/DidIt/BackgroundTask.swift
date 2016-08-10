//
//  BackgroundTask.swift
//  Dong
//
//  Created by James Campbell on 8/3/16.
//  Copyright © 2016 Dong. All rights reserved.
//

import UIKit

@objc class BackgroundTask: NSObject {
    private let application: UIApplication
    private var identifier = UIBackgroundTaskInvalid
    
    private init(application: UIApplication) {
        self.application = application
    }
    
    class func run(application: UIApplication, handler: (BackgroundTask) -> ()) {
        // NOTE: The handler must call end() when it is done
        
        let backgroundTask = BackgroundTask(application: application)
        backgroundTask.begin()
        handler(backgroundTask)
    }
    
    private func begin() {
        self.identifier = application.beginBackgroundTaskWithExpirationHandler {
            self.end()
        }
    }
    
    func end() {
        if (identifier != UIBackgroundTaskInvalid) {
            application.endBackgroundTask(identifier)
        }
        
        identifier = UIBackgroundTaskInvalid
    }
}