/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, patternWord) {
  const getPattern = function(word) {
    const chars = word.split('');
    const patternChars = new Set(chars);

    const memo = [...patternChars].reduce((memo, currentChar, idx) => {
      memo[currentChar] = idx;
      return memo;
    }, {});

    return chars.map(char => memo[char]).join('.');
  };

  const pattern = getPattern(patternWord);

  return words.filter(word => getPattern(word) === pattern);
};
