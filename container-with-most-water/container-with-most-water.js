/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let start = 0;
  let end = height.length - 1;
  let area = 0;

  while (start <= end) {
    const x = end - start;

    if (height[start] < height[end]) {
      area = Math.max(area, x * height[start]);
      start++;
    } else {
      area = Math.max(area, x * height[end]);
      end--;
    }
  }

  return area;
};
