import { makeAPIRequest } from './make-api-request';

function makeSendDidItRequest(apiKey) {
  return makeAPIRequest('/send', {}, apiKey);
}

module.exports = {
  makeSendDidItRequest
}
