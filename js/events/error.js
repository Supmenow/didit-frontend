function error(error) {
  return {
    type: 'ERROR',
    error: error
  }
}

module.exports = {
  error
}
