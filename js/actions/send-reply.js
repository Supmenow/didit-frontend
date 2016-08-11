import { makeSendReplyRequest } from '../networking';
import { startedLoading, finishedLoading, receivedError, sentDidIt, sentReply } from '../events';

function sendReply(apiKey, didit, reply) {
  return function (dispatch) {

    dispatch(startedLoading())

    makeSendReplyRequest(apiKey, didit, reply)
    .then((response) => {
      console.log("Reply Sent");
      dispatch(finishedLoading());
      dispatch(sentReply());
    }, (error) => {
      console.log("Failed Sending Reply: " + error);
      dispatch(finishedLoading());
      dispatch(receivedError("Couldn't send reply", "Please try again later"));
    })
  }
}

module.exports = {
  sendReply
}
