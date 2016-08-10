import { makeSendReplyRequest } from '../networking';
import { startedLoading, finishedLoading, receivedError, sentDidIt } from '../events';

function sendReply(apiKey) {
  return function (dispatch) {

    dispatch(startedLoading())

    makeSendReplyRequest(apiKey)
    .then((response) => {
      dispatch(finishedLoading());
      dispatch(sentReply());
    })
    .catch((err) => {
      dispatch(finishedLoading());
      dispatch(receivedError("Couldn't send reply", "Please try again later"));
    })
  }
}

module.exports = {
  sendReply
}
