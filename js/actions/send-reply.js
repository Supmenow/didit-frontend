import { makeSendReplyRequest } from '../networking';
import { startedLoading, finishedLoading, receivedError, sentDidIt, sentReply } from '../events';

function sendReply(apiKey, didit) {
  return function (dispatch) {

    dispatch(startedLoading())

    makeSendReplyRequest(apiKey, didit.userID)
    .then((response) => {
      dispatch(finishedLoading());
      dispatch(sentReply());
    }, (error) => {
      dispatch(finishedLoading());
      dispatch(receivedError("Couldn't send reply", "Please try again later"));
    })
  }
}

module.exports = {
  sendReply
}
