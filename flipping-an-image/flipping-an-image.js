/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const swap = function(list, i, j) {
  if (list[i] !== list[j]) {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }
}
var flipAndInvertImage = function(image) {
  const flip = [1, 0];

  for (let i = 0; i < image.length; i++) {
    const rowLength = image[i].length;

    for (let j = 0; j < rowLength; j++) {
      if (j < Math.floor(rowLength / 2)) {
        swap(image[i], j, rowLength - 1 - j);
      }

      image[i][j] = flip[image[i][j]];
    }
  }

  return image;
};
