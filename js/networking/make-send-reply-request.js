import { makeAPIRequest } from './make-api-request';

function makeSendReplyRequest(apiKey) {
  return makeAPIRequest('/send', {}, apiKey);
}

module.exports = {
  makeSendReplyRequest
}
