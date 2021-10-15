/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let count = 0;
  const memo = {};

  for (let i = 0; i < s.length; i++) {
    if (memo[s[i]]) continue;
    if (s.indexOf(s[i], i + 1) === -1) return i;

    memo[s[i]] = true;
  }

  return -1;
};
