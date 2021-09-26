/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  if (mat.length * mat[0].length !== r * c) return mat;

  const result = [];
  const flatten = mat.flat();

  while (result.length < r) {
    result.push(flatten.splice(0, c));
  }

  return result;
};
