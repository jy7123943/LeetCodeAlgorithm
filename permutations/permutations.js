/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    getPermutation([nums[i]], [...nums.slice(0, i), ...nums.slice(i + 1)]);
  }

  function getPermutation(first, rest) {
    if (first.length === nums.length) {
      result.push(first);
      return;
    }

    for (let j = 0; j < rest.length; j++) {
      getPermutation([...first, rest[j]], [...rest.slice(0, j), ...rest.slice(j + 1)])
    }
  }

  return result;
};
