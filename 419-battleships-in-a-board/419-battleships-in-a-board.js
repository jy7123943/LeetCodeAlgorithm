/**
 * @param {character[][]} board
 * @return {number}
 */
const searchDownRightX = function(board, x, y) {
  if (board[x]?.[y] !== 'X') return;

  board[x][y] = '.';

  searchDownRightX(board, x, y + 1);
  searchDownRightX(board, x + 1, y);
};
var countBattleships = function(board) {
  let count = 0;

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] === 'X') {
        count++;
        searchDownRightX(board, x, y);
      }
    }
  }

  return count;
};
