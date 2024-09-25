// Mayın Tarlası Fonksiyonları
const initializeGame = (rows, cols, mines) => {
  const board = Array.from({ length: rows }, () => Array(cols).fill(0));
  let minesPlaced = 0;

  while (minesPlaced < mines) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);

    if (board[row][col] === 0) {
      board[row][col] = 'M';
      minesPlaced++;
    }
  }
  return board;
};

const openCell = (board, row, col) => {
  if (board[row][col] === 'M') {
    return '💥 You hit a mine!';
  }
  return '🟢 Safe cell opened!';
};

const checkGameStatus = (board) => {
  for (let row of board) {
    if (row.includes(0)) {
      return 'Game still ongoing.';
    }
  }
  return '🏆 You won the game!';
};

module.exports = {
  initializeGame,
  openCell,
  checkGameStatus
};
