/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  const pushList = [...pushed];
  let count = 0;
  let pushIndex = 0;
  let popIndex = 0;

  while (++count <= (pushed.length * 2)) {
    if (pushList[pushIndex] === popped[popIndex]) {
      pushList.splice(pushIndex, 1);
      pushIndex--;
      popIndex++;
    } else {
      pushIndex++;
    }
  }

  return pushList.length === 0;
};
