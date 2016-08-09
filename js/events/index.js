import dismissedDidIt from './dismissed-didit';
import startedLoading from './started-loading';
import profileUpdated from './profile-updated';
import receivedDidIt from './received-didit';

module.exports = {
  ...dismissedDidIt,
  ...startedLoading,
  ...profileUpdated,
  ...receivedDidIt
};
