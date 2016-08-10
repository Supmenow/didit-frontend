class PushNotification {

  body: String
  sound: String

  constructor(props) {

    //APNS
    if (props['_alert']) {
      this.body = props['_alert'];
    }

    if (props['_sound']) {
      this.sound = props['_sound'];
    }

    //FCM
    if (props['body']) {
      this.body = props['body'];
    }

    // Parse Sound
  }
}

module.exports = PushNotification;
