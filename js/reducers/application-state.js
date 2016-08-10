import { applicationSceneNameForState } from '../reducers/application-scene';

function applicationState(state) {
  return {
    scene: applicationSceneNameForState(state),
    profile: state.profile,
    didit: state.didit,
    isLoading: state.isLoading,
    error: state.error
  };
}

module.exports = {
  applicationState
}
