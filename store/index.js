import Vuex from "vuex";
import polls from "./polls";
import authentication from "./authentication";

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      polls: polls,
      authentication: authentication
    }
  });
};

export default createStore;
