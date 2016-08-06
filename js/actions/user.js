import makeAPIRequest from 'networking';

function authenticiateWithDigits() {

  makeAPIRequest(); // - Check user exists
  // - If they do  trigger loggedInAction
  // - If not then trigger enter name action.
  // - Else trigger error action.

  return {
    type: 'AUTHENTICATED'
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
