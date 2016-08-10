import { dismissedDidIt } from '../events';

function sendReply() {
  return function (dispatch) {
    dispatch(startedLoading())
    dispatch(dismissedDidIt())
  }
}

module.exports = {
  sendReply
}
