/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if (arr.length < 3) return false;

  let start = 0;
  let end = arr.length - 1;

  while (arr[start] < arr[start + 1]) {
    start++;
  }

  while (arr[end - 1] > arr[end]) {
    end--;
  }

  if (start === end) {
    if (start === 0) return false;
    if (start === arr.length - 1) return false;

    return true;
  }
  return false;
};
