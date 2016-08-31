import Notification from '../notification';
import { updateToken } from './update-token';

function registerForNotifications(apiKey, proto) {
  return function (dispatch) {

    Notification.addEventListener('register', (token) => {
        console.log("Push Token: " + token);
        alert('token')
        dispatch(updateToken(apiKey, token, proto))
    });

    alert('not')
    Notification.requestPermissions();
  }
}

module.exports = {
  registerForNotifications
}
