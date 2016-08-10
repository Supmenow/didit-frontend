import { error, startedLoading } from '../events';
import { makeCheckUserRequest } from '../networking';
import { registerForNotifications } from './register-for-notifications';
import { uploadContacts } from './upload-contacts';

function loginWithDigits(session) {

  return function (dispatch) {

    dispatch(startedLoading())

    makeCheckUserRequest(session).then((response) => {

      var profile = response.success.user

      if (profile) {
        dispatch(registerForNotifications(profile["api-key"]))
        dispatch(uploadContacts(profile["api-key"]))
      } else {
        dispatch(error());
      }
    }).catch((err) => {
        dispatch(error(err));
    })
  }
}

module.exports = {
  loginWithDigits
}
