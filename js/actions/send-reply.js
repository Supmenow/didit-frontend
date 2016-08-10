import { makeSendReplyRequest } from '../networking';
import { startedLoading, sentReply, error } from '../events';

function sendReply(apiKey) {
  return function (dispatch) {
    dispatch(startedLoading())

    makeSendReplyRequest(apiKey)
    .then((response) => {
      if (response.success) {
        dispatch(sentReply());
      } else {
        dispatch(error("Couldn't send reply", "Please try again later"));
      }
    })
    .catch((err) => {
        dispatch(error("Couldn't send reply", "Please try again later"));
    })
  }
}

module.exports = {
  sendReply
}
