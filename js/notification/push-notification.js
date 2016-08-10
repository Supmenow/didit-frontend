class PushNotification {

  body: String
  sound: String
  userID: String

  constructor(props) {

    console.log("Parsing Notification With Properties: " + JSON.stringify(props))

    //APNS
    if (props['_alert']) {
      this.body = props['_alert'];
    }

    if (props['_sound']) {
      this.sound = props['_sound'];
    }

    if (props['userID']) {
      this.userID = props['userID'];
    }

    //FCM
    if (props['body']) {
      this.body = props['body'];
    }

    // Parse Sound for FCM
  }
}

module.exports = PushNotification;
