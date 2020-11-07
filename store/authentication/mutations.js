export default {
  setLoggedIn(state) {
    state.auth.loggedIn = true;
    window.localStorage.setItem('authState', JSON.stringify(state.auth));
  },
  setAdmin(state) {
    state.auth.admin = true;
    window.localStorage.setItem('authState', JSON.stringify(state.auth));
  },
  restoreAuthState(state, savedState) {
    state.auth = savedState;
  }
};
