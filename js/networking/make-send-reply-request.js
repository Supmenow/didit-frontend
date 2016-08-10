import { makeAPIRequest } from './make-api-request';

function makeSendReplyRequest(apiKey, replyToID) {
  return makeAPIRequest('/reply', {
    "replyToID": replyToID,
    "message": "Hello World",
    "image": "smiley",
    "sound": "dong.wav"
  }, apiKey);
}

module.exports = {
  makeSendReplyRequest
}
