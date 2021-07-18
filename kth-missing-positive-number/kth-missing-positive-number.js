/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  let prevNum = 0;
  let missingCount = 0;
  let diff = 0;

  for (let i = 0; i < arr.length; i++) {
    diff = arr[i] - prevNum - 1;
    if (diff > 0) {
      missingCount += diff;
    }

    if (missingCount >= k) {
      return arr[i] - (missingCount - k) - 1;
    }

    prevNum = arr[i];
  }

  return prevNum + (k - missingCount);
};
