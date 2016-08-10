import { makeUpdateUserTokenRequest } from '../networking';
import { profileUpdated } from '../events';

function updateToken(apiKey, token) {
  return function (dispatch) {

    makeUpdateUserTokenRequest(apiKey, token).then((response) => {
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
