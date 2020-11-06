export const getters = {
  isAuthenticated(state) {
    // return state.auth.loggedIn;
    return true;
  },

  loggedInUser(state) {
    return state.auth.user;
  },

  isAdmin(state) {
    // return state.auth.admin;
    return true;
  },
};
