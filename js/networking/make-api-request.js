
function parseAPIResponse(json) {
  return new Promise(function(resolve, reject) {

    console.log("Response: " + JSON.stringify(json));

    if (json.success) {
      resolve(json.success);
    } else {
      reject(json.error);
    }
  });
}

function makeAPIRequest(path, data, key, method = 'POST') {

    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "api-secret": "75bf2f1b372ce11b1b082b6a5b64c504be56e00fa4cfd5c8cae29fa540a4c2ec"
    }

    if (key) {
      headers["api-key"] = key
    }

    return fetch('http://139.59.184.179/api/v1' + path, {
      method: method,
      headers: headers,
      body: JSON.stringify(data)
    })
    .then(function(response) {
      return response.json();
    })
    .then((json) => {
      return parseAPIResponse(json);
    })
}

module.exports = {
  makeAPIRequest
}
