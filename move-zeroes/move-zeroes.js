/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let zeroIndex = nums.indexOf(0);

  if (zeroIndex === -1) return;

  for (let i = zeroIndex + 1; i <= nums.length - 1; i++) {
    if (nums[i] !== 0) {
      nums[zeroIndex] = nums[i];
      nums[i] = 0;
      zeroIndex++;
    }
  }
};
