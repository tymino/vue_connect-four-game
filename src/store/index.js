import { createStore } from 'vuex';

export default createStore({
  state: {
    gameGrid: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 2, 0, 2],
    ],
  },
  getters: {
    getFlatGrid(state) {
      return state.gameGrid.flat();
    }
  },
  mutations: {},
});
