function signup(name) {
  return {
    type: 'SIGN_UP',
    name: name
  }
}

module.exports = {
  signup
}
