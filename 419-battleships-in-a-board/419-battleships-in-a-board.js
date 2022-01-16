/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  let count = 0;

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] === 'X') {
        if (board[x][y + 1] === 'X') continue;
        if (board[x + 1]?.[y] === 'X') continue;
        count++;
      }
    }
  }

  return count;
};
