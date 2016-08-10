import NativeEventEmitter from 'NativeEventEmitter';
import { PushNotificationIOS, EventEmitter } from 'react-native';
import { NativeModules } from 'react-native';
import NotificationCore from './notification/core';

const APNSManager = NativeModules.APNSManager;
const APNSManagerEmitter = new NativeEventEmitter(APNSManager);

class Notification extends NotificationCore {
  static requestPermissions() {
    PushNotificationIOS.addEventListener('register', this.tokenDidUpdate);
    PushNotificationIOS.addEventListener('notification', this.remoteNotification);

    APNSManagerEmitter.addListener('remoteNotificationAction', this.remoteNotificationAction);
    APNSManager.registerForRemoteNotifications();
  }

  static protocol() {
    return 'apns';
  }
}

module.exports = Notification;
