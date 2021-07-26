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

/**
 * solution #2

var setZeroes = function(matrix) {
  let hasZeroInFirstRow = false;
  let hasZeroInFirstCol = false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) hasZeroInFirstRow = true;
        if (j === 0) hasZeroInFirstCol = true;

        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
    if (hasZeroInFirstCol) matrix[i][0] = 0;
  }
  if (hasZeroInFirstRow) {
    matrix[0].fill(0);
  } else if (hasZeroInFirstCol) {
    matrix[0][0] = 0;
  }
};
 */
