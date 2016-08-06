import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  isAuthenticatedWithDigits: false
};

function appStore(state = initialState, action) {

  if (action.type === 'LOGGED_IN') {
    return {
      isAuthenticatedWithDigits: true,
      user: action.user
    };
  }

  if (action.type === 'SIGN_UP') {
    return {
      isAuthenticatedWithDigits: true,
      name: action.name,
      user: state.user
    };
  }

  if (action.type === 'DID_IT') {
    return {
      isAuthenticatedWithDigits: true,
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
