import Contacts from '../contacts';
import { makeUploadContactsRequest } from '../networking';
import { profileUpdated } from '../events';

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
        if (response.user) {
          dispatch(profileUpdated(response.user))
        }
      })
    })
  }
}

module.exports = {
  uploadContacts
}
