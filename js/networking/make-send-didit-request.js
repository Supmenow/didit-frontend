import { makeAPIRequest } from './make-api-request';

function makeSendDidItRequest(apiKey) {
  return makeAPIRequest('/send', {
    'message': 'just did it',
    'image': 'smiley',
    'sound': 'dong.wav'
  }, apiKey);
}

module.exports = {
  makeSendDidItRequest
}
