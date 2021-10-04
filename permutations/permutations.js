/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];

  getPermutation([], nums);

  function getPermutation(permutation, rest) {
    if (permutation.length === nums.length) {
      result.push(permutation);
      return;
    }

    for (let j = 0; j < rest.length; j++) {
      getPermutation([...permutation, rest[j]], [...rest.slice(0, j), ...rest.slice(j + 1)])
    }
  }

  return result;
};
