import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';

const initialState = {};

function appStore(state = initialState, action) {

  if (action.type === 'STARTED_SIGN_UP') {
    return Object.assign({}, state, {
        signup: action.session
    });
  }

  if (action.type === 'PROFILE_UPDATED') {
    return {
      profile: action.profile
    };
  }

  if (action.type === 'STARTED_LOADING') {
    return Object.assign({}, state, {
        isLoading: true
    });
  }

  if (action.type === 'FINISHED_LOADING') {
    return Object.assign({}, state, {
        isLoading: undefined
    });
  }

  if (action.type === 'RECEIVED_ERROR') {
    return Object.assign({}, state, {
        loading: false,
        error: action.error
    });
  }

  // FIXME: Side effects are bad, make View DidIt
  if (action.type === 'SENT_DID_IT') {
    return Object.assign({}, state, {
      didit: {
        body: "You did it!",
        hideReplyButtons: true,
        sound: 'dong.wav',
        data: {
          image: 'smiley'
        }
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

const logger = createLogger();
const store = createStore(
  appStore,
  applyMiddleware(thunk, logger),
  autoRehydrate()
)

persistStore(store, {storage: AsyncStorage});

module.exports = store;
