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

module.exports = {
  authenticiateWithDigits: authenticiateWithDigits,
  signup: signup
}
