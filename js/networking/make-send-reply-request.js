import { makeAPIRequest } from './make-api-request';

function makeSendReplyRequest(apiKey, didit, reply) {
  return makeAPIRequest('/reply', {
    "replyToID": didit.data.userID,
    "message": reply.emoji,
    "image": reply.type,
    "sound": reply.type + ".wav"
  }, apiKey);
}

module.exports = {
  makeSendReplyRequest
}
