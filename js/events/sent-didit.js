function sentDidIt(didit) {
  return {
    type: 'SENT_DID_IT',
    didit: {
      body: "You did it!",
      hideReplyButtons: true,
      sound: 'dong.wav',
      image: 'smiley'
    }
  }
}

module.exports = {
  sentDidIt
}
