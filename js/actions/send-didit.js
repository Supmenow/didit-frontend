import { makeSendDidItRequest } from '../networking';
import { startedLoading, sentDidIt } from '../events';

function sendDidIt(apiKey) {
  return function(dispatch) {

    dispatch(startedLoading())

    makeSendDidItRequest(apiKey).then((response) => {
      if (response.success) {
        dispatch(sentDidIt());
      } else {
        // Handle Error
      }
    })
  }
}

module.exports = {
  sendDidIt
}
