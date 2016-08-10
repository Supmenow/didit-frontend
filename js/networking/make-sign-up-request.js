import { makeAPIRequest } from './make-api-request';

function makeSignUpRequest(session, name) {
  return makeAPIRequest('/users',
  {
    "phone": session.phoneNumber,
    "name": name,
    "proto": "apns"
  });
}

module.exports = {
  makeSignUpRequest
}
