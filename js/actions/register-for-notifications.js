import Notification from '../notification';

function registerForNotifications(apiKey) {
  return function (dispatch) {

    Notification.addEventListener('register', (token) => {
        console.log("FCM Token: " + token);
        dispatch(updateToken(apiKey, token))
    });

    Notification.requestPermissions();
  }
}

module.exports = {
  registerForNotifications
}
