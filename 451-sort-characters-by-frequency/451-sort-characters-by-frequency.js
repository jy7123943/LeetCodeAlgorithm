/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const chars = {};

  for (let i = 0; i < s.length; i++) {
    const val = chars[s[i]];

    if (val) {
      chars[s[i]][1] = val[1] + 1;
    } else {
      chars[s[i]] = [s[i], 1];
    }
  }

  return Object.values(chars)
    .sort((a, b) => b[1] - a[1])
    .map(([char, count]) => char.padEnd(count, char))
    .join('');
};
