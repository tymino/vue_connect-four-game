export const setScreenMenu = (state) => {
  state.currentScreen = state.screens[0];
  state.isAiOn = false;
};

export const setScreenGame = (state, hasAI = false) => {
  state.currentScreen = state.screens[1];
  state.isAiOn = hasAI;
};

export const setScreenRules = (state) => {
  state.currentScreen = state.screens[2];
};

export const updateStep = (state, target) => {
  const targetColumn = target.dataset.column;
  let rowIndex = -1;

  state.gameGrid.forEach(() => {
    if (state.gameGrid[rowIndex + 1][targetColumn] === 0) {
      rowIndex++;
    }
  });

  if (rowIndex >= 0) {
    state.gameGrid[rowIndex][targetColumn] = state.currentStep;
    // state.currentStep = state.currentStep === 1 ? 2 : 1;

    // state.totalSteps += 1;
  }
};

export const checkWinner = (state) => {
  for (let row = 0; row < state.gameGrid.length; row++) {
    for (let col = 0; col < state.gameGrid[row].length; col++) {
      const isHorLeft =
        state.gameGrid[row][col] === state.currentStep &&
        state.gameGrid[row][col - 1] === state.currentStep &&
        state.gameGrid[row][col - 2] === state.currentStep &&
        state.gameGrid[row][col - 3] === state.currentStep;

      if (isHorLeft) {
        state.isGameEnd = true;
      }
    }
  }
};
