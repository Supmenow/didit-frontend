//FIXME: Get format consistent across platforms and routes.
class PushNotification {

  body: String
  sound: String
  image: String
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

    if (props['_data']) {
      this.image = props['_data']['image'];
      this.userID = props['_data']['userID'];
    }

    if (props['_alert']) {
      this.body = props['_alert'];
    }

    if (props['_sound']) {
      this.sound = props['_sound'];
    }

    //Actions / FCM
    if (props['userID']) {
      this.userID = props['userID']
    }

    //FCM
    if (props['message']) {
      this.body = props['message'];
    }

    if (props['sound']) {
      this.sound = props['sound'];
    }

    if (props['image']) {
      this.image = props['image']
    }

    if (props['userID']) {
      this.userID = props['userID']
    }
  }
}

module.exports = PushNotification;
