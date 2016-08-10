class PushNotification {

  body: String
  sound: String
  data: Object

  constructor(props) {

    console.log("Parsing Notification With Properties: " + JSON.stringify(props))

    //APNS
    if (props['_alert']) {
      this.body = props['_alert'];
    }

    if (props['_sound']) {
      this.sound = props['_sound'];
    }

    if (props['_data']) {
      this.data = props['_data'];
    }

    //FCM
    if (props['body']) {
      this.body = props['body'];
    }

    // Parse Sound for FCM
    // Parse Data for FCM
  }
}

module.exports = PushNotification;
