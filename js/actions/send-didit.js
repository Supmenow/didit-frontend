import { makeSendDidItRequest } from '../networking';
import { startedLoading, sentDidIt } from '../events';

function sendDidIt(apiKey) {
  return function(dispatch) {

    dispatch(startedLoading())

    makeSendDidItRequest(apiKey)
    .then((response) => {
      if (response.success) {
        dispatch(sentDidIt());
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
  sendDidIt
}
