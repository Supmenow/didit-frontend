import { makeSendReplyRequest } from '../networking';
import { startedLoading, finishedLoading, receivedError, sentDidIt, sentReply } from '../events';

var NotificationManager = require('react-native').NativeModules.NotificationManager;

function sendReply(apiKey, didit, reply) {
  return function (dispatch) {

    dispatch(startedLoading())

    makeSendReplyRequest(apiKey, didit, reply)
    .then((response) => {
      console.log("Reply Sent");

      dispatch(finishedLoading());
      dispatch(sentReply());

      if (NotificationManager) {
        NotificationManager.postNotification("endBackgroundTask")
      }

    }, (error) => {
      console.log("Failed Sending Reply: " + error);

      dispatch(finishedLoading());
      dispatch(receivedError("Couldn't send reply", "Please try again later"));

      if (NotificationManager) {
        NotificationManager.postNotification("endBackgroundTask")
      }

    })
  }
}

module.exports = {
  sendReply
}
