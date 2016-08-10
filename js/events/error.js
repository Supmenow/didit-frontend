function error(title, message) {
  return {
    type: 'ERROR',
    error: {
      title: title,
      message: message
    }
  }
}

module.exports = {
  error
}
