export const setScreenMenu = (state) => {
  state.currentScreen = state.screens[0];
  state.isAiOn = false;
  state.score = { ...state.score, player1: 0, plauer2: 0 };
};

export const setScreenGame = (state, hasAI = false) => {
  state.gameGrid = state.gameGrid.map((row) => row.map(() => 0));
  state.isGameEnd = false;
  state.lastColumn = null;
  state.totalSteps = 0;
  state.currentStep = 1;

  state.currentScreen = state.screens[1];
  state.isAiOn = hasAI;
};

export const setScreenRules = (state) => {
  state.currentScreen = state.screens[2];
};

export const updateStep = (state, target) => {
  const targetColumn = Number(target.dataset.column);
  let rowIndex = -1;

  state.gameGrid.forEach(() => {
    if (state.gameGrid[rowIndex + 1][targetColumn] === 0) {
      rowIndex++;
    }
  });

  if (rowIndex >= 0) {
    state.gameGrid[rowIndex][targetColumn] = state.currentStep;
    state.lastColumn = targetColumn + 1;
    state.totalSteps += 1;

    if (state.totalSteps === 7 * 6) {
      state.isGameEnd = true;
      state.currentStep = 0;
    }
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
  state.currentStep = state.currentStep === 1 ? 2 : 1;
};

export const addPointsForWinner = (state) => {
  if (state.isGameEnd) {
    if (state.currentStep === 1) {
      state.score.player1 += state.score.countOfAddPoint;
    } else {
      state.score.player2 += state.score.countOfAddPoint;
    }
  }
};
