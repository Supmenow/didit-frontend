import { makeSendDidItRequest } from '../networking';
import { startedLoading, finishedLoading, receivedError, sentDidIt } from '../events';

function sendDidIt(apiKey, emoji) {
  return function(dispatch) {

    dispatch(startedLoading())

    makeSendDidItRequest(apiKey, emoji)
    .then((response) => {
      dispatch(finishedLoading())

      dispatch(sentDidIt({
        sound: 'dong.wav',
        image: emoji
      }));

    }, (error) => {
      dispatch(finishedLoading());
      dispatch(receivedError("Couldn't send Did It", "Please try again later"));
    })
  }
}

module.exports = {
  sendDidIt
}
