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
  }
};

export const checkHorizontalLine = (state) => {
  for (let row = 0; row < state.gameGrid.length; row++) {
    for (let col = 0; col < state.gameGrid[row].length - 3; col++) {
      const isLine =
        state.gameGrid[row][col] === state.currentStep &&
        state.gameGrid[row][col + 1] === state.currentStep &&
        state.gameGrid[row][col + 2] === state.currentStep &&
        state.gameGrid[row][col + 3] === state.currentStep;

      if (isLine) {
        state.isGameEnd = true;

        const winnerPlayerIndexForStyle = state.currentStep + 2;

        state.gameGrid[row][col] = winnerPlayerIndexForStyle;
        state.gameGrid[row][col + 1] = winnerPlayerIndexForStyle;
        state.gameGrid[row][col + 2] = winnerPlayerIndexForStyle;
        state.gameGrid[row][col + 3] = winnerPlayerIndexForStyle;

        return;
      }
    }
  }
};

export const checkVerticalLine = (state) => {
  if (state.isGameEnd) return;

  for (let row = 0; row < state.gameGrid.length - 3; row++) {
    for (let col = 0; col < state.gameGrid[row].length; col++) {
      const isLine =
        state.gameGrid[row][col] === state.currentStep &&
        state.gameGrid[row + 1][col] === state.currentStep &&
        state.gameGrid[row + 2][col] === state.currentStep &&
        state.gameGrid[row + 3][col] === state.currentStep;

      if (isLine) {
        state.isGameEnd = true;

        const winnerPlayerIndexForStyle = state.currentStep + 2;

        state.gameGrid[row][col] = winnerPlayerIndexForStyle;
        state.gameGrid[row + 1][col] = winnerPlayerIndexForStyle;
        state.gameGrid[row + 2][col] = winnerPlayerIndexForStyle;
        state.gameGrid[row + 3][col] = winnerPlayerIndexForStyle;

        return;
      }
    }
  }
};

export const checkDiagonalLTRBLine = (state) => {
  if (state.isGameEnd) return;

  for (let row = 0; row < state.gameGrid.length - 3; row++) {
    for (let col = 0; col < state.gameGrid[row].length - 3; col++) {
      const isLine =
        state.gameGrid[row][col] === state.currentStep &&
        state.gameGrid[row + 1][col + 1] === state.currentStep &&
        state.gameGrid[row + 2][col + 2] === state.currentStep &&
        state.gameGrid[row + 3][col + 3] === state.currentStep;

      if (isLine) {
        state.isGameEnd = true;

        const winnerPlayerIndexForStyle = state.currentStep + 2;

        state.gameGrid[row][col] = winnerPlayerIndexForStyle;
        state.gameGrid[row + 1][col + 1] = winnerPlayerIndexForStyle;
        state.gameGrid[row + 2][col + 2] = winnerPlayerIndexForStyle;
        state.gameGrid[row + 3][col + 3] = winnerPlayerIndexForStyle;

        return;
      }
    }
  }
};

export const checkDiagonalLBRTLine = (state) => {
  if (state.isGameEnd) return;

  for (let row = 3; row < state.gameGrid.length; row++) {
    for (let col = 0; col < state.gameGrid[row].length - 3; col++) {
      const isLine =
        state.gameGrid[row][col] === state.currentStep &&
        state.gameGrid[row - 1][col + 1] === state.currentStep &&
        state.gameGrid[row - 2][col + 2] === state.currentStep &&
        state.gameGrid[row - 3][col + 3] === state.currentStep;

      if (isLine) {
        state.isGameEnd = true;

        const winnerPlayerIndexForStyle = state.currentStep + 2;

        state.gameGrid[row][col] = winnerPlayerIndexForStyle;
        state.gameGrid[row - 1][col + 1] = winnerPlayerIndexForStyle;
        state.gameGrid[row - 2][col + 2] = winnerPlayerIndexForStyle;
        state.gameGrid[row - 3][col + 3] = winnerPlayerIndexForStyle;

        return;
      }
    }
  }
};

export const preparationForTheNextStep = (state) => {
  state.totalSteps += 1;
  state.currentStep = state.currentStep === 1 ? 2 : 1;
};
