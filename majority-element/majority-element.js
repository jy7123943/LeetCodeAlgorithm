/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const majorityCondition = nums.length / 2;
  let count = 0;
  let lastNum = nums[0];

  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (lastNum === nums[i]) {
      count++;
    } else {
      count = 1;
      lastNum = nums[i];
    }
    
    if (count > majorityCondition) return nums[i];
  }
};
