export default {
  setLoggedIn(state) {
    state.auth.loggedIn = true;
  },
  setAdmin(state) {
    state.auth.admin = true;
  }
};
