/**
 * @param {string} s
 * @return {boolean}
 */
const BRACKET_TYPES = {
  ')': '(',
  '}': '{',
  ']': '[',
};
var isValid = function(s) {
  const brackets = s.split('').reduce((stack, bracket) => {
    if (BRACKET_TYPES[bracket] && BRACKET_TYPES[bracket] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(bracket);
    }
    return stack;
  }, []);

  return brackets.length === 0;
};
