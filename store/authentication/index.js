import getters from "./getters";
import mutations from "./mutations";

const defaultState = {
  auth: {
    loggedIn: false,
    admin: false
  }
};

const inBrowser = typeof window !== "undefined";
// if in browser, use pre-fetched state injected by SSR

const state =
  inBrowser && window.__INITIAL_STATE__
    ? window.__INITIAL_STATE__.page
    : defaultState;

export default {
  state,
  mutations,
  getters
};
