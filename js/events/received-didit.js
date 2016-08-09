function receivedDidIt(didit) {
  return {
    type: 'RECEIVED_DID_IT',
    didit: didit
  }
}

module.exports = {
  receivedDidIt
}
