const state = {
  screens: ['menu', 'game', 'rules'],
  currentScreen: 'game',
  isGameEnd: false,
  timer: {
    id: null,
    time: 0,
  },
  currentStep: 1,
  totalSteps: 0,
  score: {
    player1: 6,
    player2: 13,
  },
  gameGrid: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ],
  isAiOn: false,
};

export default state;
