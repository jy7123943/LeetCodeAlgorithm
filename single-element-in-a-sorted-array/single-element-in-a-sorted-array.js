/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  const mid = Math.floor(nums.length / 2);

  if (nums.length <= 3) {
    if (nums[mid] === nums[mid + 1]) {
      return nums[0];
    } else {
      return nums[nums.length - 1];
    }
  }

  if (nums[mid] === nums[mid + 1]) {
    return singleNonDuplicate(
      mid % 2 === 0 ? nums.slice(mid) : nums.slice(0, mid)
    );
  } else {
    return singleNonDuplicate(
      mid % 2 === 0 ? nums.slice(0, mid + 1) : nums.slice(mid + 1)
    );
  }
};
