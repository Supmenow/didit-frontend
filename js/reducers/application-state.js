import { applicationSceneNameForState } from '../reducers/application-scene';

function applicationState(state) {
  return {
    scene: applicationSceneNameForState(state),
    profile: state.profile,
    didit: state.didit,
    loading: state.loading,
    error: state.error
  };
}

module.exports = {
  applicationState
}
