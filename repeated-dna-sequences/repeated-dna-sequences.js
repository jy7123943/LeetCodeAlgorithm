/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const result = new Set();
  const hashtable = new Set();
  for (let i = 0; i < s.length - 9; i++) {
    const sequences = s.slice(i, i + 10);

    if (hashtable.has(sequences)) {
      result.add(sequences);
    } else {
      hashtable.add(sequences);
    }
  }

  return Array.from(result);
};
