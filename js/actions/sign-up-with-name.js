import { startedLoading, finishedLoading, startedSignup, receivedError } from '../events';;
import { makeSignUpRequest } from '../networking';
import { registerForNotifications } from './register-for-notifications';
import { uploadContacts } from './upload-contacts'
import { profileUpdated } from './events';

function signUpWithName(session, name, proto) {

  return function (dispatch) {

    dispatch(startedLoading())

    makeSignUpRequest(session, name, proto)
    .then((response) => {

      dispatch(finishedLoading())

      dispatch(profileUpdated(response.user))
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
