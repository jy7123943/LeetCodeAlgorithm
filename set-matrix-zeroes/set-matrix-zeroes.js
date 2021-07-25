/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


var setZeroes = function(matrix) {
  const col = new Set();
  const row = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row.add(i);
        col.add(j);
      }
    }
  }

  row.forEach((rowNum) => {
    matrix[rowNum].fill(0);
  });
  col.forEach((colNum) => {
    matrix.forEach((row) => {
      row[colNum] = 0;
    });
  });
};
