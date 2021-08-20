/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
  const copyNums = [...nums].sort((l, r) => r - l);

  for (let i = 0; i < copyNums.length; i++) {
    if (!copyNums[i + 1] || !copyNums[i + 2]) return 0;

    if (copyNums[i] < copyNums[i + 1] + copyNums[i + 2]) {
      return copyNums[i] + copyNums[i + 1] + copyNums[i + 2];
    }
  }

  return 0;
};
