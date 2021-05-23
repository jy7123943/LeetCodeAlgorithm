/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const expected = [...heights];
  let count = 0;

  for (let i = 0; i < expected.length; i++) {
    for (let j = 0; j < expected.length - 1 - i; j++) {
      if (expected[j] > expected[j + 1]) {
        const temp = expected[j];
        expected[j] = expected[j + 1];
        expected[j + 1] = temp;
      }
    }

    if (heights[expected.length - i - 1] !== expected[expected.length - i - 1]) count++;
  }

  return count;
};
