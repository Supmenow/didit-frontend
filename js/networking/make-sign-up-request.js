import { makeAPIRequest } from './make-api-request';

function makeSignUpRequest(session, name, proto) {
  return makeAPIRequest('/users',
  {
    "phone": session.phoneNumber,
    "name": name,
    "proto": proto
  });
}

module.exports = {
  makeSignUpRequest
}
