import { makeUpdateUserTokenRequest } from '../networking';
import { profileUpdated } from '../events';

function updateToken(apiKey, token, protocol) {
  return function (dispatch) {

    makeUpdateUserTokenRequest(apiKey, token, protocol).then((response) => {
      if (response.user) {
        dispatch(profileUpdated(response.user))
      }
    }, (error) => {
      console.log("Failed to register user token " + error);
    })
  }
}

module.exports = {
  updateToken
}
