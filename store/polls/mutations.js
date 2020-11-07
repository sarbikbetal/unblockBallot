export default {
  update(state, newPollList) {
    state.polls = [];
    state.polls = [newPollList];
  }
};
