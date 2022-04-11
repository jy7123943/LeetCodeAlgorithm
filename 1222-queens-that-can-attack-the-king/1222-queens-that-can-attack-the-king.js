/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, [kingX, kingY]) {
  const results = [];
  const board = Array.from({ length: 8 }, _ => new Array(8).fill(0));

  queens.forEach(([x, y]) => board[x][y] = 'Q');

  const nextPositionGetters = [
    (step) => [kingX - step, kingY],
    (step) => [kingX, kingY - step],
    (step) => [kingX, kingY + step],
    (step) => [kingX + step, kingY],
    (step) => [kingX - step, kingY - step],
    (step) => [kingX - step, kingY + step],
    (step) => [kingX + step, kingY - step],
    (step) => [kingX + step, kingY + step],
  ];

  nextPositionGetters.forEach((getNextPosition) => {
    findClosestQueen(getNextPosition);
  });

  function findClosestQueen(getNextPosition, step = 1) {
    const position = getNextPosition(step);
    const [x, y] = position;

    if (board[x]?.[y] === 'Q') {
      results.push(position);
      return;
    }
    if (board[x]?.[y] === undefined) {
      return;
    }
    findClosestQueen(getNextPosition, step + 1);
  }

  return results;
};
