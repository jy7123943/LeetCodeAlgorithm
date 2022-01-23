/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
  const sumNumbers = (numbers) => numbers.reduce((sum, n) => sum += n, 0);

  const calculate = (rowMin, rowMax, colMin, colMax) => (
    mat.slice(rowMin, rowMax + 1)
      .reduce((sum, row) => sum += sumNumbers(row.slice(colMin, colMax + 1)), 0)
  );

  return mat.map((row, rowIndex) => (
    row.map((col, colIndex) => (
      calculate(Math.max(rowIndex - k, 0), rowIndex + k, Math.max(colIndex - k, 0), colIndex + k)
    ))
  ));
};
