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

  if (action.type === 'DID_IT') {
    return {
      isAuthenticatedWithDigits: true,
      name: action.name,
      didit: true
    };
  }

  return state;
}

let store = createStore(appStore)
module.exports = store;
