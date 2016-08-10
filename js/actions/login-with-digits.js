import { startedLoading, startedSignup, receivedError } from '../events';
import { makeCheckUserRequest } from '../networking';
import { registerForNotifications } from './register-for-notifications';
import { uploadContacts } from './upload-contacts';

function loginWithDigits(session) {

  return function (dispatch) {

    dispatch(startedLoading())

    makeCheckUserRequest(session).then((response) => {

      dispatch(registerForNotifications(response.user["api-key"]))
      dispatch(uploadContacts(response.user["api-key"]))

    }, function(error) {

        if (error.status_code == 404) {
          dispatch(startedSignup());
        } else {
          dispatch(receivedError("We couldn't log you in", "Please try again later"));
        }
    });
  }
}

module.exports = {
  loginWithDigits
}
