/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums.sort((l, r) => l - r);

  return nums[Math.floor(nums.length / 2)];
};
