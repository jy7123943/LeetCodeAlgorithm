/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    const targetIndex = arr.indexOf(arr[i] * 2);

    if (targetIndex !== -1 && targetIndex !== i) {
      return true;
    }

  }

  return false;
};
