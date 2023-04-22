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
    [0, 0, 0, 3, 3, 3, 3],
    [0, 4, 0, 0, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 0],
    [0, 0, 0, 0, 4, 0, 0],
  ],
  isAiOn: false,
  rules: {
    title: 'rules',
    section1: {
      header: 'objective',
      body: [
        'be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).',
      ],
    },
    section2: {
      header: 'how to play',
      body: [
        'Red goes first in the game',
        'Players must alternate turns, and only one disc can be dropped in each turn.',
        'The game ends when there is a 4-in-a-row or a stalemate.',
        'The starter of the previous game goes second on the next game.',
      ],
    },
  },
};

export default state;
