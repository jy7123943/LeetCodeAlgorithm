/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
  let bits = 0;

  for (let i = 0; i < nums.length; i++) {
    bits |= nums[i];
  }

  return bits * Math.pow(2, nums.length - 1);
};
