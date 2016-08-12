function sentDidIt(didit) {
  return {
    type: 'SENT_DID_IT',
    didit: {
      body: "You did it!",
      hideReplyButtons: true,
      sound: didit.sound,
      image: didit.image
    }
  }
}

module.exports = {
  sentDidIt
}
