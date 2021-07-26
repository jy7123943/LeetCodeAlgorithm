/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


var setZeroes = function(matrix) {
  const col = new Set();
  let hasZeroInRow = false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        hasZeroInRow = true;
        col.add(j);
      }
    }
    if (hasZeroInRow) {
      hasZeroInRow = false;
      matrix[i].fill(0);
    }
  }

  col.forEach((colNum) => {
    matrix.forEach((row) => {
      row[colNum] = 0;
    });
  });
};
