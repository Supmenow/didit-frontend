import dismissedDidIt from './dismissed-didit';
import startedLoading from './started-loading';
import profileUpdated from './profile-updated';
import receivedDidIt from './received-didit';
import sentDidIt from './sent-didit';
import error from './error';

module.exports = {
  ...dismissedDidIt,
  ...startedLoading,
  ...profileUpdated,
  ...receivedDidIt,
  ...sentDidIt,
  ...error
};
