import loginWithDigits from './login-with-digits';
import signUpWithName from './sign-up-with-name';
import sendDidIt from './send-didit';
import sendReply from './send-reply';

module.exports = {
  ...loginWithDigits,
  ...signUpWithName,
  ...sendDidIt,
  ...sendReply
};
