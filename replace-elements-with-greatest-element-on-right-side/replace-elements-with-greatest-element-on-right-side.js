/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  let max = arr[arr.length - 1];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      arr[i] = -1;
      continue;
    }

    if (max < arr[i]) {
      const temp = arr[i];
      arr[i] = max;
      max = temp;
    } else {
      arr[i] = max;
    }
  }

  return arr;
};
