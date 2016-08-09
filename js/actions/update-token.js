import { makeUpdateUserTokenRequest } from '../networking';
import { profileUpdated } from '../events';

function updateToken(apiKey, token) {
  return function (dispatch) {

    makeUpdateUserTokenRequest(apiKey, token).then((response) => {

      var profile = response.success.user

      if (profile) {
        dispatch(profileUpdated(profile))
      } else {
        // Handle Error
      }
    })
  }
}

module.exports = {
  updateToken
}
