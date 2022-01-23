/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
  const x = mat.length, y = mat[0].length;

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      const left = mat[i][j - 1] || 0;
      const up = mat[i - 1]?.[j] || 0;
      const diag = mat[i - 1]?.[j - 1] || 0;
      mat[i][j] += up + left - diag;
    }
  }

  const result = Array.from({ length: x }, () => Array(y));

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      const rowMin = Math.max(0, i - k),
            colMin = Math.max(0, j - k),
            rowMax = Math.min(x - 1, i + k),
            colMax = Math.min(y - 1, j + k);

      const left = mat[rowMax][colMin - 1] || 0,
            up = mat[rowMin - 1]?.[colMax] || 0,
            diag = mat[rowMin - 1]?.[colMin - 1] || 0;

      result[i][j] = mat[rowMax][colMax] - left - up + diag;
    }
  }
  return result;
};
