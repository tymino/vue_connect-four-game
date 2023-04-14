export function handleCellClick(state, target) {
  const column = target.dataset.column;
  let rowIndex = -1;

  state.gameGrid.forEach(() => {
    if (state.gameGrid[rowIndex + 1][column] === 0) {
      rowIndex++;
    }
  });

  console.log(rowIndex);

  if (rowIndex >= 0) {
    state.gameGrid[rowIndex][column] = 2;
  }

  // state.score.player1 = 2;
  // console.table(state.score.player1, column);
}
