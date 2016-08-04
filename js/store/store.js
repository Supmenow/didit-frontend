import { createStore } from 'redux';

const initialState = {
  isLoggedIn: false
};

function appStore(state = initialState, action) {

  if (action.type === 'LOGGED_IN') {
    return {
      isLoggedIn: true,
    };
  }

  if (action.type === 'LOGGED_OUT') {
    return initialState;
  }

  return state;
}

let store = createStore(appStore)
module.exports = store;
