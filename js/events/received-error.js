function receivedError(title, message) {
  return {
    type: 'RECEIVED_ERROR',
    error: {
      title: title,
      message: message
    }
  }
}

module.exports = {
  receivedError
}
