/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let result = 0;

  const leftovers = s.split('').reduce((memo, char) => {
    if (memo[char] === 1) {
      result += 2;
      delete memo[char];

      return memo;
    }

    memo[char] = 1;
    return memo;
  }, {});

  return Object.keys(leftovers).length > 0 ? result + 1 : result;
};
