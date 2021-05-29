/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let index = 0;

  while (index <= nums.length - 1) {
    if (nums[index] === undefined) {
      index++;
      continue;
    }

    const targetIndex = nums[index] - 1;
    
    if (nums[targetIndex] === undefined) {
      nums[index] = index + 1;
      index++;
    } else {
      nums[index] = nums[targetIndex];
      nums[targetIndex] = undefined;
    }
  }

  return nums.filter(num => num !== undefined);
};