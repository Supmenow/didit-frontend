import EventEmitter from 'EventEmitter';
import PushNotification from './push-notification';
import invariant from 'invariant';

const NotificationEventEmitter = new EventEmitter();
const _listenerHandlers = new Map();

const DEVICE_NOTIF_EVENT = 'remoteNotificationReceived';
const DEVICE_NOTIF_ACTION_EVENT = 'remoteNotificationAction';
const NOTIF_REGISTER_EVENT = 'remoteNotificationsRegistered';
const DEVICE_LOCAL_NOTIF_EVENT = 'localNotificationReceived';

class NotificationCore {

  static addEventListener(type: string, handler: Function) {
    invariant(
      type === 'notification' || type === 'remoteNotificationAction' || type === 'register' || type === 'localNotification',
      'PushNotificationIOS only supports `notification`, `remoteNotificationAction`, `register` and `localNotification` events'
    );
    var listener;
    if (type === 'notification') {
      listener =  NotificationEventEmitter.addListener(
        DEVICE_NOTIF_EVENT,
        (notification) => {
          handler(new PushNotification(notification));
        }
      );
    } else if (type === 'remoteNotificationAction') {
      listener = NotificationEventEmitter.addListener(
        DEVICE_NOTIF_ACTION_EVENT,
        handler
      );
    } else if (type === 'localNotification') {
      listener = NotificationEventEmitter.addListener(
        DEVICE_LOCAL_NOTIF_EVENT,
        handler
      );
    } else if (type === 'register') {
      listener = NotificationEventEmitter.addListener(
        NOTIF_REGISTER_EVENT,
        handler
      );
    }
    _listenerHandlers.set(handler, listener);
  }

  static removeEventListener(type: string, handler: Function) {
    invariant(
      type === 'notification' || type === 'remoteNotificationAction' || type === 'register' || type === 'localNotification',
      'Notification only supports `notification`, `remoteNotificationAction`, `register` and `localNotification` events'
    );
    var listener = _listenerHandlers.get(handler);
    if (!listener) {
      return;
    }
    listener.remove();
    _listenerHandlers.delete(handler);
  }

  static remoteNotification(notification) {
    NotificationEventEmitter.emit(DEVICE_NOTIF_EVENT, notification);
  }

  static remoteNotificationAction(notification) {
    NotificationEventEmitter.emit(DEVICE_NOTIF_ACTION_EVENT, notification);
  }

  static tokenDidUpdate(token) {
    NotificationEventEmitter.emit(NOTIF_REGISTER_EVENT, token);
  }
}

module.exports = NotificationCore;
