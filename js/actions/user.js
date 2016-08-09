//FIXME: Break this down once we know the actions we will need
//FIXME: Split into actions and events
import { makeCheckUserRequest, makeSendDidItRequest, makeUploadContactsRequest, makeUpdateUserTokenRequest } from '../networking';
import Contacts from '../contacts';
import Notification from '../notification';

import startedLoading from '../events/started-loading';
import profileUpdated from '../events/profile-updated';

function dismissDidit() {
  return {
      type: 'DISMISS_DID_IT'
  }
}

function updateToken(apiKey, token) {
  return function (dispatch) {

    makeUpdateUserTokenRequest(apiKey, token).then((response) => {

      var profile = response.success.user

      if (profile) {
        dispatch(profileUpdated(profile))
      } else {
        // Handle Error
      }
    })
  }
}

function uploadContacts(apiKey) {
  return function (dispatch) {

    Contacts.getAllInBackground().then((contacts) => {

      var phoneNumbers = contacts.map((contact) => {
          return contact["phoneNumbers"].map((number) => {
            return number["number"];
          })
      })
      .reduce(function(a, b) {
        return a.concat(b);
      }, []);

      makeUploadContactsRequest(apiKey, phoneNumbers).then((response) => {

        var profile = response.success.user

        if (profile) {
          dispatch(profileUpdated(profile))
        } else {
          // Handle Error
        }
      })
    })
  }
}

function registerForNotifications(apiKey) {
  return function (dispatch) {

    Notification.addEventListener('register', (token) => {
        console.log("FCM Token: " + token);
        dispatch(updateToken(apiKey, token))
    });

    Notification.requestPermissions();
  }
}

function loginWithDigits(session) {

  return function (dispatch) {

    dispatch(startedLoading())

    makeCheckUserRequest(session).then((response) => {

      var profile = response.success.user

      if (profile) {
        dispatch(registerForNotifications(profile["api-key"]))
        dispatch(uploadContacts(profile["api-key"]))
      } else {
        // Handle Error
      }
    })
  }
}

function signup(name) {
  return {
    type: 'SIGN_UP',
    name: name
  }
}

function sendDidIt(apiKey) {
  return function(dispatch) {

    dispatch(startedLoading())

    makeSendDidItRequest(apiKey).then((response) => {

      if (response.success) {
        dispatch(viewDidIt());
      } else {
        // Handle Error
      }
    })
  }
}

function viewDidIt(notification) {
  return {
      type: 'DID_IT',
      didit: notification
  }
}

function sendReply() {
  return {
    type: 'SENT_REPLY'
  }
}

module.exports = {
  loginWithDigits: loginWithDigits,
  signup: signup,
  sendDidIt: sendDidIt,
  viewDidIt: viewDidIt,
  uploadContacts: uploadContacts,
  dismissDidit: dismissDidit
}
