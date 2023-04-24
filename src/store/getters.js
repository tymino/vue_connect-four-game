export const getFlatGrid = (state) => state.gameGrid.flat();

export const getCurrentStep = (state) => `player ${state.currentStep}'s turn`;

export const getTime = (state) => `${state.timer.time}s`;

export const getWinner = (state) => `player ${state.currentStep}`;

export const getWinnerIndexForColor = (state) => {
  return state.isGameEnd ? state.currentStep : 0;
};
