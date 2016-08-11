import { makeAPIRequest } from './make-api-request';

function makeUpdateUserTokenRequest(apiKey, token) {
  alert(protocol);
  return makeAPIRequest('/users', {
    "device_token": token,
    "proto": protocol
  }, apiKey, 'PUT');
}

module.exports = {
  makeUpdateUserTokenRequest
}
