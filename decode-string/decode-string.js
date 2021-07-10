/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const regexp = /([0-9]+\[[a-z]+\])/;
  const patterns = s.match(regexp);

  if (patterns === null) return s;

  const [pattern] = patterns;
  const number = Number(pattern.match(/[0-9]+/)[0]);
  const char = pattern.match(/[a-z]+/)[0];
  const decoded = char.repeat(number);

  return decodeString(s.replace(regexp, decoded));
};
