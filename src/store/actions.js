export const handleCellClick = ({ dispatch, commit, state }, target) => {
  if (state.isGameEnd) {
    clearInterval(state.timer.id);
  } else {
    dispatch('startTimer');
    commit('updateStep', target);
  }
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
