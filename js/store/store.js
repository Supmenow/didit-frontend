import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';

const initialState = {};

function appStore(state = initialState, action) {

  if (action.type === 'PROFILE_UPDATED') {
    return {
      profile: action.profile
    };
  }

  if (action.type === 'STARTED_LOADING') {
    return Object.assign({}, state, {
        loading: true
    });
  }

  if (action.type === 'ERROR') {
    return Object.assign({}, state, {
        loading: false,
        error: action.error
    });
  }

  if (action.type === 'SIGN_UP') {
    return Object.assign({}, state, {
        profile: state.user
    });
  }

  if (action.type === 'SENT_DID_IT') {
    return Object.assign({}, state, {
      didit: {
        body: "You did it!"
      }
    });
  }

  if (action.type === 'RECEIVED_DID_IT') {
    return Object.assign({}, state, {
      didit: action.didit
    });
  }

  if (action.type === 'DISMISSED_DID_IT' || action.type === 'SENT_REPLY') {
    return Object.assign({}, state, {
      didit: false
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
