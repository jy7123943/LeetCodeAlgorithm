/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  const hashTable = nums.reduce((memo, currentValue) => {
    if (memo[currentValue]) {
      memo[currentValue]++;
    } else {
      memo[currentValue] = 1;
    }
    return memo;
  }, {});

  return Object.values(hashTable).reduce((result, currentValue) => {
    if (currentValue <= 1) return result;

    result += currentValue * (currentValue - 1) / 2;
    return result;
  }, 0);
};
