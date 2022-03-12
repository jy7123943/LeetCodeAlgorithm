/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = [[1]];

  for (let i = 1; i < numRows; i++) {
    if (i === 1) {
      result.push([1, 1]);
      continue;
    }

    const prev = result[i - 1];
    const temp = [1];

    for (let j = 0; j < Math.floor(prev.length / 2); j++) {
      temp[j + 1] = prev[j] + prev[j + 1];
      temp[prev.length - j - 1] = prev[j] + prev[j + 1];
    }

    temp.push(1);
    result.push(temp);  
  }

  return result;
};
