/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target, startIndex = 0, endIndex = nums.length - 1) {
  if (endIndex - startIndex === -1) return startIndex;
  if (endIndex - startIndex === 0) {
    return nums[startIndex] < target ? startIndex + 1 : startIndex;
  }

  const midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

  console.log(midIndex)
  if (target === nums[midIndex]) return midIndex;

  if (target < nums[midIndex]) {
    return searchInsert(nums, target, startIndex, midIndex - 1);
  }

  if (target > nums[midIndex]) {
    return searchInsert(nums, target, midIndex + 1, endIndex);
  }
};
