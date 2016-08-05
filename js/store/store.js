import { createStore } from 'redux';

const initialState = {
  isAuthenticatedWithDigits: false
};

function appStore(state = initialState, action) {

  if (action.type === 'AUTHENTICATED') {
    return {
      isAuthenticatedWithDigits: true,
    };
  }

  if (action.type === 'SIGN_UP') {
    return {
      isAuthenticatedWithDigits: true,
      name: action.name
    };
  }

  return state;
}

let store = createStore(appStore)
module.exports = store;
