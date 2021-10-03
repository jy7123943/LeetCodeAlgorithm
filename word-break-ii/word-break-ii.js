/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const result = [];

  findString(0);

  function findString(startIndex, words = []) {
    if (startIndex === s.length) {
      result.push(words.join(' '));
      return;
    }

    for (let i = startIndex; i < s.length; i++) {
      const sliced = s.slice(startIndex, i + 1);

      if (isInDictionary(sliced)) {
        findString(i + 1, [...words, sliced]);
      }
    }
  }

  function isInDictionary(word) {
    return wordDict.includes(word);
  }

  return result;
};
