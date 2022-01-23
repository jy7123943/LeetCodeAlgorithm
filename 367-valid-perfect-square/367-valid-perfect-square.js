/**
 * @param {number} num
 * @return {boolean}
 */
/*
var isPerfectSquare = function(num) {
  return (num ** 0.5) % 1 === 0;  // 이렇게 내장 operator 썼다가 답 보고 다시 품...
};
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
