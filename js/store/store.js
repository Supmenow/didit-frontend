import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  loggedIn: false
};

function appStore(state = initialState, action) {

  if (action.type === 'LOGGED_IN') {
    return {
      loggedIn: true,
      profile: state.user
    };
  }

  if (action.type === 'SIGN_UP') {
    return Object.assign(state, {
        profile: state.user
    });
  }

  if (action.type === 'DID_IT') {
    return Object.assign(state, {
      didit: true
    });
  }

  return state;
}

let store = createStore(
  appStore,
  applyMiddleware(thunk)
)

module.exports = store;
