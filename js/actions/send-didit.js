import { makeSendDidItRequest } from '../networking';
import { startedLoading, finishedLoading, receivedError, sentDidIt } from '../events';

function sendDidIt(apiKey) {
  return function(dispatch) {

    dispatch(startedLoading())

    makeSendDidItRequest(apiKey)
    .then((response) => {
      dispatch(finishedLoading())
      dispatch(sentDidIt());
    })
    .catch((err) => {
        dispatch(finishedLoading())
        dispatch(receivedError("Couldn't send reply", "Please try again later"));
    })
  }
}

module.exports = {
  sendDidIt
}
