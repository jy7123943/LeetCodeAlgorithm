/**
 * @param {number[][]} moves
 * @return {string}
 */

const ANSWERS = [
  ['00', '01', '02'],
  ['10', '11', '12'],
  ['20', '21', '22'],
  ['00', '10', '20'],
  ['01', '11', '21'],
  ['02', '12', '22'],
  ['00', '11', '22'],
  ['02', '11', '20'],
];
const tictactoe = function(moves) {
  const isBoardFull = moves.length === 9;

  const playerA = new Set();
  const playerB = new Set();

  moves.forEach(([x, y], i) => {
    if (i % 2 === 0) playerA.add(`${x}${y}`);
    else playerB.add(`${x}${y}`);
  });

  if (playerA.size >= 3 || playerB.size >= 3) {
    for (let i = 0; i < ANSWERS.length; i++) {
      const [x, y, z] = ANSWERS[i];

      if (playerA.has(x) && playerA.has(y) && playerA.has(z)) return 'A';
      if (playerB.has(x) && playerB.has(y) && playerB.has(z)) return 'B';
    }
  }

  return isBoardFull ? 'Draw' : 'Pending';
};
