function startedSignup(session) {
  return {
    type: 'STARTED_SIGN_UP',
    session: session
  }
}

module.exports = {
  startedSignup
}
