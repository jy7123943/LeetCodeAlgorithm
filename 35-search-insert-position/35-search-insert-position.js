/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target, startIndex = 0) {
  if (nums.length === 0) return startIndex;
  if (nums.length === 1) {
    if (nums[0] >= target) return startIndex;
    if (nums[0] < target) return startIndex + 1;
  }

  const midIndex = Math.floor(nums.length / 2);

  if (nums[midIndex] === target) {
    return midIndex;
  }

  if (nums[midIndex] > target) {
    return searchInsert(nums.slice(0, midIndex), target, startIndex);
  }

  if (nums[midIndex] < target) {
    return searchInsert(nums.slice(midIndex + 1), target, startIndex + midIndex + 1);
  }
};
