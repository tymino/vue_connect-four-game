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

export const checkWinner = (state) => {
  /*
    isDiagonalLTRBLine, isDiagonalLBRTLine
    LTRB - left-top right-bottom
    LBRT - left-bottom right-top
  */

  for (let row = 0; row < state.gameGrid.length; row++) {
    for (let col = 0; col < state.gameGrid[row].length; col++) {
      const isHorizontalLine =
        state.gameGrid[row][col] === state.currentStep &&
        state.gameGrid[row][col + 1] === state.currentStep &&
        state.gameGrid[row][col + 2] === state.currentStep &&
        state.gameGrid[row][col + 3] === state.currentStep;
      const isDiagonalLTRBLine =
        state.gameGrid[row][col] === state.currentStep &&
        state.gameGrid[row][col + 1] === state.currentStep &&
        state.gameGrid[row][col + 1] === state.currentStep &&
        state.gameGrid[row][col + 1] === state.currentStep;
      const isDiagonalLBRTLine =
        state.gameGrid[row][col] === state.currentStep &&
        state.gameGrid[row][col + 1] === state.currentStep &&
        state.gameGrid[row][col + 2] === state.currentStep &&
        state.gameGrid[row][col + 3] === state.currentStep;
      const isVerticalLine =
        state.gameGrid[row][col] === state.currentStep &&
        state.gameGrid[row][col + 1] === state.currentStep &&
        state.gameGrid[row][col + 2] === state.currentStep &&
        state.gameGrid[row][col + 3] === state.currentStep;

      console.log('test', state.gameGrid[6]);

      // convert to 1d array and check valid result

      const hasWinnerLine =
        isHorizontalLine ||
        isDiagonalLTRBLine ||
        isDiagonalLBRTLine ||
        isVerticalLine;

      if (hasWinnerLine) {
        state.isGameEnd = true;
      }
    }
  }
};

export const preparationForTheNextStep = (state) => {
  state.totalSteps += 1;
  state.currentStep = state.currentStep === 1 ? 2 : 1;
};
