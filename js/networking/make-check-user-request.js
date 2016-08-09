import { makeAPIRequest } from './make-api-request';

function makeCheckUserRequest(session) {
  return makeAPIRequest('/check',
  {
    "phone": session.phoneNumber
  });
}

module.exports = {
  makeCheckUserRequest
}
