import { PushNotificationIOS, EventEmitter } from 'react-native';
import { NativeModules } from 'react-native';
import NotificationCore from './notification/core';

const APNSManager = NativeModules.APNSManager;

// Ask for additional time for notifications
class Notification extends NotificationCore {
  static requestPermissions() {
    PushNotificationIOS.addEventListener('register', this.tokenDidUpdate);
    PushNotificationIOS.addEventListener('notification', this.remoteNotification);

    APNSManager.registerForRemoteNotifications();
  }

  static protocol() {
    return 'apns';
  }
}

module.exports = Notification;
