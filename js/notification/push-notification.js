class PushNotification {

  body: String

  constructor(props) {

    //APNS
    if (props['_alert']) {
      this.body = props['_alert'];
    }

    //FCM
    if (props['body']) {
      this.body = props['body'];
    }
  }
}

module.exports = PushNotification;
