/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  const pushList = [...pushed];
  let pushIndex = 0;
  let popIndex = 0;

  for (let i = 0; i < pushed.length * 2; i++) {
    if (pushList[pushIndex] === popped[popIndex]) {
      pushList.splice(pushIndex, 1);
      pushIndex--;
      popIndex++;
    } else {
      pushIndex++;
    }

    if (pushList.length === 0) return true;
  }

  return pushList.length === 0;
};
