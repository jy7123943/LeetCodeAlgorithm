/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      if (i > start) {
        const temp = nums[start];
        nums[start] = nums[i];
        nums[i] = temp;
      }
      start++;
    }
  }

  return nums;
};
