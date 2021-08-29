/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

var floodFill = function(image, sr, sc, newColor) {
  const prevColor = image[sr][sc];
  const queue = [{sr, sc}];
  const memo = {};

  while (queue.length > 0) {
    const {sr, sc} = queue.shift();

    image[sr][sc] = newColor;
    memo[`${sr},${sc}`] = true;

    if (!memo[`${sr - 1},${sc}`] && image[sr - 1]?.[sc] === prevColor) {
      queue.push({sr: sr - 1, sc});
    }
    if (!memo[`${sr},${sc - 1}`] && image[sr][sc - 1] === prevColor) {
      queue.push({sr, sc: sc - 1});
    }
    if (!memo[`${sr},${sc + 1}`] && image[sr][sc + 1] === prevColor) {
      queue.push({sr, sc: sc + 1});
    }
     if (!memo[`${sr + 1},${sc}`] && image[sr + 1]?.[sc] === prevColor) {
      queue.push({sr: sr + 1, sc});
    }
  }

  return image;
};
