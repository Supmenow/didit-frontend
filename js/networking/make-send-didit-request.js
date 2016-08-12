import { makeAPIRequest } from './make-api-request';

function makeSendDidItRequest(apiKey, emoji) {
  return makeAPIRequest('/send', {
    'message': 'just did it',
    'image': emoji,
    'sound': 'dong.wav'
  }, apiKey);
}

module.exports = {
  makeSendDidItRequest
}
