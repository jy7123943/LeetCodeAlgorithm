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
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);
    return singleNonDuplicate(left.length % 2 === 1 ? left : right);
  } else {
    const left = nums.slice(0, mid + 1);
    const right = nums.slice(mid + 1);
    return singleNonDuplicate(left.length % 2 === 1 ? left : right);
  }
};
