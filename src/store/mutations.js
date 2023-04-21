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

  const lineGameGrid = state.gameGrid.flat();

  lineGameGrid.forEach((_, index, array) => {
    const isHorizontalLine =
      array[index] === state.currentStep &&
      array[index + 1] === state.currentStep &&
      array[index + 2] === state.currentStep &&
      array[index + 3] === state.currentStep;
    const isDiagonalLTRBLine =
      array[index] === state.currentStep &&
      array[index + 8] === state.currentStep &&
      array[index + 16] === state.currentStep &&
      array[index + 24] === state.currentStep;
    const isDiagonalLBRTLine =
      array[index + 3] === state.currentStep &&
      array[index + 9] === state.currentStep &&
      array[index + 15] === state.currentStep &&
      array[index + 21] === state.currentStep;
    const isVerticalLine =
      array[index] === state.currentStep &&
      array[index + 7] === state.currentStep &&
      array[index + 14] === state.currentStep &&
      array[index + 21] === state.currentStep;

    const hasWinnerLine =
      isHorizontalLine ||
      isDiagonalLTRBLine ||
      isDiagonalLBRTLine ||
      isVerticalLine;

    if (hasWinnerLine) {
      state.isGameEnd = true;
    }
  });
};

export const preparationForTheNextStep = (state) => {
  state.totalSteps += 1;
  state.currentStep = state.currentStep === 1 ? 2 : 1;
};
