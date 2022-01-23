/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
  const memoSum = {};
  const sumNumbers = (numbers) => numbers.reduce((sum, n) => sum += n, 0);

  const calculate = (rowMin, rowMax, colMin, colMax) => {
    const key = `${rowMin}${rowMax}${colMin}${colMax}`;

    if (memoSum[key]) return memoSum[key];

    memoSum[key] = mat.slice(rowMin, rowMax + 1).reduce((sum, row) => sum += sumNumbers(row.slice(colMin, colMax + 1)), 0);
    return memoSum[key];
  };

  const maxRowIndex = mat.length - 1;
  const maxColIndex = mat[0].length - 1;
  return mat.map((row, rowIndex) => (
    row.map((col, colIndex) => (
      calculate(
        Math.max(rowIndex - k, 0),
        Math.min(rowIndex + k, maxRowIndex),
        Math.max(colIndex - k, 0),
        Math.min(colIndex + k, maxColIndex),
      )
    ))
  ));
};
