import makeCheckUserRequest from './make-check-user-request';
import makeUploadContactsRequest from './make-upload-contacts-request';

module.exports = {
  ...makeCheckUserRequest,
  ...makeUploadContactsRequest
}
