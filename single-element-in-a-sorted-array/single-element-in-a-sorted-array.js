/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums, left = 0, right = nums.length - 1) {
  const mid = Math.floor((right - left) / 2) + left;

  if (right - left <= 2) {
    if (nums[left] === nums[left + 1]) {
      return nums[right];
    }
    return nums[left];
  }

  if (nums[mid] === nums[mid + 1]) {
    if (mid % 2 === 0) {
      return singleNonDuplicate(nums, mid, right);
    }
    return singleNonDuplicate(nums, 0, mid - 1);
  }

  if (mid % 2 === 0) {
    return singleNonDuplicate(nums, 0, mid);
  }
  return singleNonDuplicate(nums, mid + 1, right);
};
