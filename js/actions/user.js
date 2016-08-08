import { makeCheckUserRequest, makeSendDidItRequest, makeUploadContactsRequest } from '../networking';
import Contacts from '../contacts';

function loading() {
  return {
    type: 'LOADING'
  }
}

function updateProfile(profile) {
  return {
    type: 'PROFILE_UPDATED',
    profile: profile
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
          dispatch(updateProfile(profile))
        } else {
          // Handle Error
        }
      })
    })
  }
}

function loginWithDigits(session) {

  return function (dispatch) {

    dispatch(loading())

    makeCheckUserRequest(session).then((response) => {

      var profile = response.success.user

      if (profile) {
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

function didit() {
  return {
      type: 'DID_IT'
  }
}

function dismissDidit() {
  return {
      type: 'DISMISS_DID_IT'
  }
}

function sendDidIt(apiKey) {
  return function(dispatch) {

    dispatch(loading())

    makeSendDidItRequest(apiKey).then((response) => {

      if (response.success) {
        dispatch(didit());
      } else {
        // Handle Error
      }
    })
  }
}

module.exports = {
  loginWithDigits: loginWithDigits,
  signup: signup,
  sendDidIt: sendDidIt,
  uploadContacts: uploadContacts,
  dismissDidit: dismissDidit
}
