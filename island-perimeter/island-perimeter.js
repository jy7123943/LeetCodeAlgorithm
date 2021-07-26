/**
 * @param {number[][]} grid
 * @return {number}
 */
const countCoastLine = (grid, i, j) => {
  let count = 0;

  if (grid[i - 1]?.[j] === 1) count++;
  if (grid[i][j - 1] === 1) count++;
  if (grid[i + 1]?.[j] === 1) count++;
  if (grid[i][j + 1] === 1) count++;

  return 4 - count;
};
var islandPerimeter = function(grid) {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        result += countCoastLine(grid, i, j)
      }
    }
  }

  return result;
};