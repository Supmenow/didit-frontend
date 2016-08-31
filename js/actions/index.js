import loginWithDigits from './login-with-digits';
import signUpWithName from './sign-up-with-name';
import sendDidIt from './send-didit';
import sendReply from './send-reply';
import uploadContacts from './upload-contacts';
import registerForNotifications from './register-for-notifications';

module.exports = {
  ...loginWithDigits,
  ...signUpWithName,
  ...sendDidIt,
  ...sendReply,
  ...uploadContacts,
  ...registerForNotifications
};
