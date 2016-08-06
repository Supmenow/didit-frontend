import makeAPIRequest from '../networking';

function authenticated(user) {
  return {
    type: 'LOGGED_IN',
    user: user
  }
}

// - Pass in phone-number
function loginWithDigits(session) {

  return function (dispatch) {

    makeAPIRequest(session).then((response) => {

      var user = response.success.user

      if (user) {
        dispatch(authenticated(user))
      } else {
        //dispatch(error())
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

module.exports = {
  loginWithDigits: loginWithDigits,
  signup: signup,
  didit: didit
}
