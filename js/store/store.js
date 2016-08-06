import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  loggedIn: false
};

function appStore(state = initialState, action) {

  if (action.type === 'LOGGED_IN') {
    return {
      loggedIn: true,
      user: action.user
    };
  }

  if (action.type === 'SIGN_UP') {
    return {
      loggedIn: true,
      name: action.name,
      user: state.user
    };
  }

  if (action.type === 'DID_IT') {
    return {
      loggedIn: true,
      user: state.user,
      didit: true
    };
  }

  return state;
}

let store = createStore(
  appStore,
  applyMiddleware(thunk)
)

module.exports = store;
