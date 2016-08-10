import makeCheckUserRequest from './make-check-user-request';
import makeSignUpRequest from './make-sign-up-request';
import makeUploadContactsRequest from './make-upload-contacts-request';
import makeUpdateUserTokenRequest from './make-update-user-token-request';
import makeSendDidItRequest from './make-send-didit-request';
import makeSendReplyRequest from './make-send-reply-request';

module.exports = {
  ...makeCheckUserRequest,
  ...makeSignUpRequest,
  ...makeUploadContactsRequest,
  ...makeUpdateUserTokenRequest,
  ...makeSendDidItRequest,
  ...makeSendReplyRequest
}
