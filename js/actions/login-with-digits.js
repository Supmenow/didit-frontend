import { startedLoading, finishedLoading, startedSignup, receivedError } from '../events';
import { makeCheckUserRequest } from '../networking';
import { registerForNotifications } from './register-for-notifications';
import { uploadContacts } from './upload-contacts';

function loginWithDigits(session) {

  return function (dispatch) {

    dispatch(startedLoading())

    makeCheckUserRequest(session)
    .then((response) => {

      dispatch(finishedLoading())

      // FIXME: Move into common action
      dispatch(registerForNotifications(response.user["api-key"]))
      dispatch(uploadContacts(response.user["api-key"]))

    }, function(error) {

        dispatch(finishedLoading())

        if (error.status_code == 404) {
          dispatch(startedSignup(session));
        } else {
          dispatch(receivedError("We couldn't log you in", "Please try again later"));
        }
    });
  }
}

module.exports = {
  loginWithDigits
}
