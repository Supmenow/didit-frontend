function sendDidIt(apiKey) {
  return function(dispatch) {

    dispatch(startedLoading())

    makeSendDidItRequest(apiKey).then((response) => {

      if (response.success) {
        dispatch(viewDidIt());
      } else {
        // Handle Error
      }
    })
  }
}

module.exports = {
  sendDidIt
}
