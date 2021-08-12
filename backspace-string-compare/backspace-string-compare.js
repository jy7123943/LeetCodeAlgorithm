/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  const s1 = s.split('').reduce((stack, char) => {
    if (char === '#') {
      stack.pop();
    } else {
      stack.push(char);
    }
    return stack;
  }, []).join('');

  const t1 = t.split('').reduce((stack, char) => {
    if (char === '#') {
      stack.pop();
    } else {
      stack.push(char);
    }
    return stack;
  }, []).join('');
  
  return s1 === t1;
};
