const state = {
  screens: ['menu', 'game', 'rules'],
  currentScreen: 'menu',
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
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 2, 0, 2],
  ],
  isAiOn: false,
};

export default state;
