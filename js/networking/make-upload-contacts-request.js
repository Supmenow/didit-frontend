import { makeAPIRequest } from './make-api-request';

function makeUploadContactsRequest(apiKey, numbers) {
  return makeAPIRequest('/contacts', {
    "numbers": numbers
  }, apiKey);
}

module.exports = {
  makeUploadContactsRequest
}
