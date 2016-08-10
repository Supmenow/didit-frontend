import { makeAPIRequest } from './make-api-request';

function makeUpdateUserTokenRequest(apiKey, token) {

  console.log(apiKey);
  console.log(token);

  return makeAPIRequest('/users', {
    "device_token": token,
    "proto": "apns"
  }, apiKey, 'PUT');
}

module.exports = {
  makeUpdateUserTokenRequest
}
