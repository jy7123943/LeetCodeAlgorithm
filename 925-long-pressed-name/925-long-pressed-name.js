/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let index = 0;

  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === name[index]) {
      index++;
      continue;
    }
    if (typed[i] === name[index - 1]) {
      continue;
    }
    return false;
  }

  return index === name.length;
};
