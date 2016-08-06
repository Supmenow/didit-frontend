import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';

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

  if (action.type === 'LOADING') {
    return Object.assign({}, state, {
        loading: true
    });
  }

  if (action.type === 'SIGN_UP') {
    return Object.assign({}, state, {
        profile: state.user
    });
  }

  if (action.type === 'DID_IT') {
    return Object.assign({}, state, {
      didit: true
    });
  }

  return state;
}

const store = createStore(
  appStore,
  applyMiddleware(thunk),
  autoRehydrate()
)

persistStore(store, {storage: AsyncStorage});

module.exports = store;
