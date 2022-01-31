/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const prefixSums = [];
  const prefixSumsReverse = [];

  for (let i = 0; i < nums.length; i++) {
    prefixSums[i] = (prefixSums[i - 1] || 0) + nums[i];
    prefixSumsReverse[nums.length - 1 - i] = (prefixSumsReverse[nums.length - i] || 0) + nums[nums.length - 1 - i];
  }

  return prefixSums.findIndex((sum, i) => sum === prefixSumsReverse[i]);
};
