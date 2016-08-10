import { startedLoading, finishedLoading, startedSignup, receivedError } from '../events';;
import { makeSignUpRequest } from '../networking';
import { registerForNotifications } from './register-for-notifications';
import { uploadContacts } from './upload-contacts'

function signUpWithName(session, name) {

  return function (dispatch) {

    dispatch(startedLoading())

    makeSignUpRequest(session, name)
    .then((response) => {

      dispatch(finishedLoading())

      // FIXME: Move into common action
      dispatch(registerForNotifications(response.user["api-key"]))
      dispatch(uploadContacts(response.user["api-key"]))

    }, function(error) {

      dispatch(finishedLoading())
      dispatch(receivedError("We couldn't log you in", "Please try again later"));
    });
  }
}

module.exports = {
  signUpWithName
}
