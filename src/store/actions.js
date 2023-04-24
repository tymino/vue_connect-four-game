export const handleRestartGame = ({ commit, dispatch }) => {
  commit('setScreenGame');
  dispatch('startTimer');
};

export const handleCellClick = ({ state, commit, dispatch }, target) => {
  if (state.isGameEnd) return;

  commit('updateStep', target);
  dispatch('checkWinner');

  if (state.isGameEnd) {
    console.log('is Game End');
    clearInterval(state.timer.id);
  } else {
    commit('preparationForTheNextStep');
    dispatch('startTimer');
  }
};

export const checkWinner = ({ commit }) => {
  /*
    isDiagonalLTRBLine, isDiagonalLBRTLine
    LTRB - left-top right-bottom
    LBRT - left-bottom right-top
  */

  commit('checkHorizontalLine');
  commit('checkVerticalLine');
  commit('checkDiagonalLTRBLine');
  commit('checkDiagonalLBRTLine');
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
