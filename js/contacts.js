import Contacts from 'react-native-contacts';

Contacts.getAllInBackground = function() {
  return new Promise(function(resolve, reject) {
    Contacts.getAll((error, contacts) => {
      if (!error) {
        resolve(contacts);
      } else {
        reject(error);
      }
    })
  });
};

module.exports = Contacts;
