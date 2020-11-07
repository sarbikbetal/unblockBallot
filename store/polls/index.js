import getters from "./getters";
import mutations from "./mutations";

const defaultState = [
  {
    question: "Which character do you want to choose?",
    options: ["Rick", "Morty", "Summer", "Jerry", "Beth"],
    id: "1adf34qf9wnde40ud417",
    opensAt: new Date(),
    closesAt: new Date(),
    orgName: "CodeIIEST",
    orgImg: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
  }
];

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
