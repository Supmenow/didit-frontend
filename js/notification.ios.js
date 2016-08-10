import { PushNotificationIOS, EventEmitter } from 'react-native';
import { NativeModules } from 'react-native';
import NotificationCore from './notification/core';

// Ask for additional time for notifications
class Notification extends NotificationCore {
  static requestPermissions() {
    PushNotificationIOS.addEventListener('register', this.tokenDidUpdate);
    PushNotificationIOS.addEventListener('notification', this.remoteNotification);

    var APNSManager = NativeModules.RCTAPNSManager;
    APNSManager.registerForRemoteNotifications();
  }

  static protocol() {
    return 'apns';
  }
}

module.exports = Notification;
