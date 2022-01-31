/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const totalSum = nums.reduce((acc, num) => acc += num);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i];

    if (leftSum === totalSum - leftSum + nums[i]) {
      return i
    }
  }

  return -1;
};
