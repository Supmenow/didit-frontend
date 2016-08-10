import { makeAPIRequest } from './make-api-request';

function makeSendReplyRequest(apiKey) {
  return makeAPIRequest('/reply', {
    "replyToID": "1",
    "message": "Hello World",
    "image": "smiley",
    "sound": "dong.wav"
  }, apiKey);
}

module.exports = {
  makeSendReplyRequest
}
