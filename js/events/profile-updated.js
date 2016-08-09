function profileUpdated(profile) {
  return {
    type: 'PROFILE_UPDATED',
    profile: profile
  }
}

module.exports = {
  profileUpdated
}
