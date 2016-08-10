import loginWithDigits from './login-with-digits';
import sendDidIt from './send-didit';
import sendReply from './send-reply';

module.exports = {
  ...loginWithDigits,
  ...sendDidIt,
  ...sendReply
};
