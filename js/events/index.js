import dismissedError from './dismissed-error';
import dismissedDidIt from './dismissed-didit';
import startedLoading from './started-loading';
import finishedLoading from './finished-loading';
import profileUpdated from './profile-updated';
import receivedDidIt from './received-didit';
import sentDidIt from './sent-didit';
import sentReply from './sent-reply';
import receivedError from './received-error';
import startedSignup from './started-signup';

module.exports = {
  ...dismissedError,
  ...dismissedDidIt,
  ...startedLoading,
  ...finishedLoading,
  ...profileUpdated,
  ...receivedDidIt,
  ...sentDidIt,
  ...sentReply,
  ...receivedError,
  ...startedSignup
};
