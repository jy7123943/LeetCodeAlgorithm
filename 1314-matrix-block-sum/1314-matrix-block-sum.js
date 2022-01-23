/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
  const sliceArray = (arr, min, max) => arr.slice(Math.max(0, min), max + 1);
  const sumNumbers = (numbers) => numbers.reduce((sum, n) => sum += n, 0);

  const calculate = (rowMin, rowMax, colMin, colMax) => (
    sliceArray(mat, rowMin, rowMax)
      .reduce((sum, row) => sum += sumNumbers(sliceArray(row, colMin, colMax)), 0)
  );

  return mat.slice().map((row, rowIndex) => (
    row.slice().map((col, colIndex) => (
      calculate(rowIndex - k, rowIndex + k, colIndex - k, colIndex + k)
    ))
  ));
};
