/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const majorityCondition = nums.length / 2;
  const memo = {};

  for (let i = 0; i < nums.length; i++) {
    if (memo[nums[i]]) {
      memo[nums[i]]++;
    } else {
      memo[nums[i]] = 1;
    }
    if (memo[nums[i]] > majorityCondition) return nums[i];
  }
};
