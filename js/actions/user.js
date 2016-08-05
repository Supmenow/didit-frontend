function authenticiateWithDigits() {
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
