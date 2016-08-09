class PushNotification {

  body: String

  constructor(props) {
    this.body = props['_alert'];
  }
}

module.exports = PushNotification;
