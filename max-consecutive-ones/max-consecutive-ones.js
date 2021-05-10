/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let result = 0;

  nums.reduce((acc, currentNum) => {
    let nextAcc = acc;

    if (currentNum === 1) {
      nextAcc++;
    }

    if (result < nextAcc) {
      result = nextAcc;
    }

    return currentNum === 0 ? 0 : nextAcc;
  }, 0);

  return result;
};
