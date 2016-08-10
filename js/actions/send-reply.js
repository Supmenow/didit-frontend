import { makeSendReplyRequest } from '../networking';
import { startedLoading, sentReply, error } from '../events';

function sendReply(apiKey) {
  return function (dispatch) {
    dispatch(startedLoading())

    makeSendReplyRequest(apiKey).then((response) => {
      if (response.success) {
        dispatch(sentReply());
      } else {
        dispatch(error({}));
      }
    })
  }
}

module.exports = {
  sendReply
}
