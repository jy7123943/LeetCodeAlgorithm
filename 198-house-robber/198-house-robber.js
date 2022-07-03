/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const memo = [];

  var _rob = function(nums, idx) {
    if (idx < 0) return 0;
    if (memo[idx] >= 0) return memo[idx];

    const result = Math.max(_rob(nums, idx - 2) + nums[idx], _rob(nums, idx - 1));
    memo[idx] = result;

    return result;
  }

  return _rob(nums, nums.length - 1);
};
