export const setScreen = (state, name) => (state.currentStep = name);

export const updateStep = (state, target) => {
  const targetColumn = target.dataset.column;
  let rowIndex = -1;

  state.gameGrid.forEach(() => {
    if (state.gameGrid[rowIndex + 1][targetColumn] === 0) {
      rowIndex++;
    }
  });

  console.log(rowIndex);

  if (rowIndex >= 0) {
    state.gameGrid[rowIndex][targetColumn] = state.currentStep;
    state.currentStep = state.currentStep === 1 ? 2 : 1;
    state.totalSteps += 1;
  }
};

// function checkWinner() {}
