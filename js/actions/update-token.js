import { makeUpdateUserTokenRequest } from '../networking';
import { profileUpdated } from '../events';

function updateToken(apiKey, token) {
  return function (dispatch) {

    makeUpdateUserTokenRequest(apiKey, token).then((response) => {

      console.log("Token: " + token);

      if (response.user) {
        dispatch(profileUpdated(response.user))
      }
    })
  }
}

module.exports = {
  updateToken
}
