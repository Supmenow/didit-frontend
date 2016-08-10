function signUpWithName(name) {
  return {
    type: 'SIGN_UP',
    name: name
  }
}

module.exports = {
  signUpWithName
}
