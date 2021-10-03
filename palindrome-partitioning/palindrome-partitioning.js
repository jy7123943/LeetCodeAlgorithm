/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const result = [];

  searchPalindrom(0);

  function searchPalindrom(startIndex, palindromes = []) {
    if (startIndex === s.length) {
      result.push(palindromes);
      return;
    }

    for (let i = startIndex; i < s.length; i++) {

      const sliced = s.slice(startIndex, i + 1);

      if (isPalindrome(sliced)) {
        searchPalindrom(i + 1, [...palindromes, sliced]);
      }
    }
  }
  
  function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');

    return word === reversed;
  }
  
  return result;
};
