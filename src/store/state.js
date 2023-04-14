const state = {
  isGameEnd: false,
  timer: 0,
  score: {
    player1: 0,
    player2: 0,
  },
  gameGrid: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 2, 0, 2],
  ],
};

export default state;
