export const handleCellClick = ({ dispatch, commit }, target) => {
  // dispatch('clearTimer');
  dispatch('startTimer');
  commit('updateStep', target);
};

export const startTimer = ({ state }) => {
  clearInterval(state.timer.id);

  state.timer.time = 0;

  state.timer.id = setInterval(() => {
    if (state.timer.time < 99) {
      state.timer.time += 1;
    }
  }, 1000);
};

// export const clearTimer = ({ state }) => {
//   clearInterval(state.timer.id);
// };
