import { makeAPIRequest } from './make-api-request';

function makeUpdateUserTokenRequest(apiKey, token) {
  return makeAPIRequest('/users', {
    "iid_token": token
  }, apiKey, 'PUT');
}

module.exports = {
  makeUpdateUserTokenRequest
}
