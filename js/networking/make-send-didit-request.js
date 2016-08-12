import { makeAPIRequest } from './make-api-request';

function makeSendDidItRequest(apiKey, emoji, unicode) {
  return makeAPIRequest('/send', {
    'message': 'just did it ' + unicode,
    'image': emoji,
    'sound': 'dong.wav'
  }, apiKey);
}

module.exports = {
  makeSendDidItRequest
}
