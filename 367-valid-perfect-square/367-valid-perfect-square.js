/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) return true;

  let left = 0;
  let right = num;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const squaredMid = mid * mid;

    if (squaredMid === num) {
      return true;
    } else if (squaredMid < num) {
      left++;
    } else {
      right = mid;
    }
  }

  return false;
};
