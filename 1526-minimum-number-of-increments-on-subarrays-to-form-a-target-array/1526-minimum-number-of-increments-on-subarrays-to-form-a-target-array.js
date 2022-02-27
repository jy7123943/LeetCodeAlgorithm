/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function(target) {
  return target.reduce((sum, _, idx) => {
    const diff = target[idx] - target[idx - 1];
    return diff > 0 ? sum + diff : sum;
  });
};
