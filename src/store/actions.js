export const handleCellClick = ({ state, commit, dispatch }, target) => {
  if (state.isGameEnd) return;

  commit('updateStep', target);
  commit('checkWinner');

  if (state.isGameEnd) {
    console.log('is Game End');
    clearInterval(state.timer.id);
  } else {
    commit('preparationForTheNextStep');
    dispatch('startTimer');
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
