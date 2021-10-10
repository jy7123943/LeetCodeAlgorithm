/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [];

  findCombination(0, target, []);

  function findCombination(start, targetNum, combination) {
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > targetNum) continue;
      if (candidates[i] === targetNum) {
        result.push([...combination, candidates[i]]);
      } else {
        findCombination(i, targetNum - candidates[i], [...combination, candidates[i]]);
      }
    }
  }

  return result;
};
