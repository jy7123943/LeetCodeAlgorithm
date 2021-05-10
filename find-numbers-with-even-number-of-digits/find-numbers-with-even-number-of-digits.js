/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  return nums.reduce((count, currentNum) => {
    if (currentNum.toString().length % 2 === 0) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
};
