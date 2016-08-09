function makeSendDidItRequest(apiKey) {
  return makeAPIRequest('/send', {}, apiKey);
}
