/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let first = nums[0];
  let second = null;
  let third = null;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > first) {
      third = second;
      second = first;
      first = nums[i];
    } else if (second === null || nums[i] > second) {
      if (nums[i] !== first) {
        third = second;
        second = nums[i];
      }
    } else if (third === null || nums[i] > third) {
      if (nums[i] !== second) {
        third = nums[i];
      }
    }
  }

  return third === null ? first : third;
};
