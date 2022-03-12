/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    const temp = new Array(i + 1).fill(1);

    if (i >= 2) {
      const prev = result[i - 1];

      for (let j = 0; j < Math.floor(prev.length / 2); j++) {
        temp[j + 1] = prev[j] + prev[j + 1];
        temp[temp.length - j - 2] = prev[j] + prev[j + 1];
      }
    }

    result.push(temp);  
  }

  return result;
};
