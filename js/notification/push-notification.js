class PushNotification {

  body: String

  constructor(props) {
    body = props['_alert']
  }
}

module.exports = PushNotification;
