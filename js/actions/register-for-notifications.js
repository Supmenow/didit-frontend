import Notification from '../notification';
import { updateToken } from './update-token';

function registerForNotifications(apiKey, proto) {
  return function (dispatch) {

    Notification.addEventListener('register', (token) => {
        console.log("Push Token: " + token);
        dispatch(updateToken(apiKey, token, proto))
    });

    Notification.requestPermissions();
  }
}

module.exports = {
  registerForNotifications
}
