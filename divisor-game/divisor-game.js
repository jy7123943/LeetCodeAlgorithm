/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
  if (n === 1) return false;

  return n % 2 === 0;
};
