import FCM from 'react-native-fcm';
import NotificationCore from './notification/core';

class Notification extends NotificationCore {
  static requestPermissions() {
    FCM.getFCMToken().then(this.tokenDidUpdate);
    FCM.on('refreshToken', this.tokenDidUpdate);
    FCM.on('notification', this.remoteNotification);
  }

  static protocol() {
    return 'gcm';
  }
}

module.exports = Notification;
