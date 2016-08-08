function makeAPIRequest(path, data, key) {

    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "api-secret": "75bf2f1b372ce11b1b082b6a5b64c504be56e00fa4cfd5c8cae29fa540a4c2ec"
    }

    if (key) {
      headers["api-key"] = key
    }

    return fetch('http://139.59.184.179/api/v1' + path, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    }).then((response) => {
      return response.json()
    })
}

function makeCheckUserRequest(session) {
  return makeAPIRequest('/check',
  {
    "phone": session.phoneNumber
  });
}

function makeSendDidItRequest(apiKey) {
  return makeAPIRequest('/send', {}, apiKey);
}

module.exports = {
  makeCheckUserRequest: makeCheckUserRequest,
  makeSendDidItRequest: makeSendDidItRequest
};
