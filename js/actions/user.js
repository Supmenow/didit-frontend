import { makeCheckUserRequest, makeSendDidItRequest } from '../networking';

function loading() {
  return {
    type: 'LOADING'
  }
}

function authenticated(profile) {
  return {
    type: 'LOGGED_IN',
    profile: profile
  }
}

function loginWithDigits(session) {

  return function (dispatch) {

    dispatch(loading())

    makeCheckUserRequest(session).then((response) => {

      var profile = response.success.user

      if (profile) {
        dispatch(authenticated(profile))
      } else {
        // Handle Error
      }
    })
  }
}

function signup(name) {
  return {
    type: 'SIGN_UP',
    name: name
  }
}

function didit() {
  return {
      type: 'DID_IT'
  }
}

function sendDidIt(apiKey) {
  return function(dispatch) {

    dispatch(loading())

    makeSendDidItRequest(apiKey).then((response) => {

      if (response.success) {
        dispatch(didit())
      } else {
        // Handle Error
      }
    })
  }
}

module.exports = {
  loginWithDigits: loginWithDigits,
  signup: signup,
  sendDidIt: sendDidIt
}
