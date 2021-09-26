/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let result = 0;

  nums.reduce((memo, currentValue) => {
    if (memo[currentValue]) {
      result += memo[currentValue];
      memo[currentValue]++;
    } else {
      memo[currentValue] = 1;
    }
    return memo;
  }, {});

  return result;
};
