/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) return 1;

  const steps = [1, 2];

  for (let i = 2; i < n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }

  return steps.at(-1);
};
