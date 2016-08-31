import { startedLoading, finishedLoading, startedSignup, receivedError } from '../events';
import { makeCheckUserRequest } from '../networking';
import { registerForNotifications } from './register-for-notifications';
import { uploadContacts } from './upload-contacts';
import { profileUpdated } from '../events';

function loginWithDigits(session, proto) {

  return function (dispatch) {

    dispatch(startedLoading())

    makeCheckUserRequest(session)
    .then((response) => {

      dispatch(finishedLoading())

      dispatch(profileUpdated(response.user))
      dispatch(registerForNotifications(response.user["api-key"], proto))
      dispatch(uploadContacts(response.user["api-key"]))

    }, function(error) {

        dispatch(finishedLoading())

        if (error.status_code == 404) {
          dispatch(startedSignup(session));
        } else {
          console.error(error)
          dispatch(receivedError("We couldn't log you in", "Please try again later"));
        }
    });
  }
}

module.exports = {
  loginWithDigits
}
