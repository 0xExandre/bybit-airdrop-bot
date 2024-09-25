function displayHeader() { 
  process.stdout.write('\x1Bc');
  console.log('========================================'.cyan);
  console.log('=        🌟 Blum Minesweeper Game 🌟     ='.cyan);
  console.log('=      Created by 0xeXandre      ='.cyan);
  console.log('========================================'.cyan);
  console.log();
}

module.exports = { displayHeader };
