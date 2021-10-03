/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const memo = {};
  const result = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    memo[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    end = Math.max(memo[s[i]], end);

    if (end === i) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }

  return result;
};
