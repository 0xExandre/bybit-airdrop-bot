const { initializeGame, openCell, checkGameStatus } = require('./api');
const { displayHeader } = require('./display');
const prompt = require('prompt-sync')();

async function startMinesweeper() {
  displayHeader();
  const board = initializeGame(5, 5, 3);  // 5x5 board, 3 mines
  
  let gameStatus = checkGameStatus(board);
  
  while (gameStatus === 'Game still ongoing.') {
    const row = prompt('Enter row (0-4): ');
    const col = prompt('Enter column (0-4): ');
    console.log(openCell(board, row, col));
    gameStatus = checkGameStatus(board);
  }

  console.log(gameStatus);
}

startMinesweeper();
