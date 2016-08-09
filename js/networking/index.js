import makeCheckUserRequest from './make-check-user-request';
import makeUploadContactsRequest from './make-upload-contacts-request';
import makeUpdateUserTokenRequest from './make-update-user-token-request';

module.exports = {
  ...makeCheckUserRequest,
  ...makeUploadContactsRequest,
  ...makeUpdateUserTokenRequest
}
