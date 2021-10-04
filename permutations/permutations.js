/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, permutation = [], result = []) {
  if (nums.length === permutation.length) {
    result.push(permutation);
    return;
  }

  const rest = nums.filter(num => !permutation.includes(num));

  for (let i = 0; i < rest.length; i++) {
    permute(nums, [...permutation, rest[i]], result);
  }

  return result;
};
