/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
  const gamers = Array.from({ length: n }, (_, i) => i + 1);
  let startIndex = 0;

  while (gamers.length > 1) {
    let targetIndex = startIndex + k - 1;

    if (targetIndex > gamers.length - 1) {
      const forwardSteps = targetIndex - gamers.length;
      targetIndex = forwardSteps < gamers.length ? forwardSteps : forwardSteps % gamers.length;
    }

    startIndex = targetIndex === gamers.length - 1 ? 0 : targetIndex;
    gamers.splice(targetIndex, 1);
  }

  return gamers[0];
};
