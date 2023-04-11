import { createStore } from 'vuex';

const state = {
  gameGrid: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2],
  ],
};

const getters = {
  getFlatGrid(state) {
    return state.gameGrid.flat();
  },
};

export default createStore({
  state,
  getters,
  mutations: {},
});
