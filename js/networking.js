function makeAPIRequest() {
    return fetch('http://139.59.184.179/api/v1/check', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "api-secret": "75bf2f1b372ce11b1b082b6a5b64c504be56e00fa4cfd5c8cae29fa540a4c2ec"
      },
      body: JSON.stringify({
        "phone": session.phoneNumber
      })
    })
}

module.exports = makeAPIRequest;
