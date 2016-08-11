import { makeSendDidItRequest } from '../networking';
import { startedLoading, finishedLoading, receivedError, sentDidIt } from '../events';

function sendDidIt(apiKey) {
  return function(dispatch) {

    dispatch(startedLoading())

    makeSendDidItRequest(apiKey)
    .then((response) => {
      dispatch(finishedLoading())
      dispatch(sentDidIt());
    }, (error) => {
      dispatch(finishedLoading());
      dispatch(receivedError("Couldn't send Did It", "Please try again later"));
    })
  }
}

module.exports = {
  sendDidIt
}
