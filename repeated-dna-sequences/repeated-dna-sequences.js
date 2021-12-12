/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const result = [];
  const hashtable = {};
  for (let i = 0; i < s.length - 9; i++) {
    const sequences = s.slice(i, i + 10);
    if (!hashtable[sequences]) {
      hashtable[sequences] = 1;
      continue;
    }

    if (hashtable[sequences] === 1) {
      hashtable[sequences] = 2;
      result.push(sequences);
    }
  }

  return result;
};
