import makeAPIRequest from '../networking';

function authenticated(user) {
  return {
    type: 'LOGGED_IN',
    user: user
  }
}

// - Pass in phone-number
function authenticiateWithDigits() {

  return function (dispatch) {

    makeAPIRequest().then((response) => {

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
  authenticiateWithDigits: authenticiateWithDigits,
  signup: signup,
  didit: didit
}
