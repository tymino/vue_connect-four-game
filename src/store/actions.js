export const startTimer = ({ state }) => {
  // commit('startGame');

  console.log('test');

  state.timer.id = setInterval(() => {
    if (state.timer.time < 100) {
      state.timer.time += 1;
    }
  }, 1000);
};

export const clearTimer = ({ state }) => {
  clearInterval(state.timer.id);
};
