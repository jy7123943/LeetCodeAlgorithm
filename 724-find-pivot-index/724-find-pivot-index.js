/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const totalSums = nums.reduce((acc, num) => acc += num);
  const prefixSums = [];

  for (let i = 0; i < nums.length; i++) {
    prefixSums[i] = (prefixSums[i - 1] || 0) + nums[i];

    if (prefixSums[i] === totalSums - (prefixSums[i - 1] || 0)) {
      return i
    }
  }

  return -1;
};
