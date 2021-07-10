/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const regexp = /([0-9]+\[[a-z]+\])/g;
  const patterns = s.match(regexp);

  if (patterns === null) return s;

  const replacedStr = patterns.reduce((str, currentPattern) => {
    const number = Number(currentPattern.match(/[0-9]+/)[0]);
    const char = currentPattern.match(/[a-z]+/)[0];
    const decoded = char.repeat(number);

    return str.replace(currentPattern, decoded);
  }, s);

  return decodeString(replacedStr);
};
