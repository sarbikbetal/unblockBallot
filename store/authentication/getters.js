export default {
  isLoggedIn(state) {
    return state.auth.loggedIn;
    // return true;
  },

  isAdmin(state) {
    return state.auth.admin;
    // return true;
  }
};
