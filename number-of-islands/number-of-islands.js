/**
 * @param {character[][]} grid
 * @return {number}
 */
function searchLand (grid, i, j) {
  if (grid[i][j] !== "1") return;
  grid[i][j] = null;

  if (grid[i][j - 1] === "1") {
    searchLand(grid, i, j - 1);
  }
  if (grid[i][j + 1] === "1") {
    searchLand(grid, i, j + 1);
  }
  if (grid[i + 1]?.[j] === "1") {
    searchLand(grid, i + 1, j);
  }
  if (grid[i - 1]?.[j] === "1") {
    searchLand(grid, i - 1, j);
  }
};

var numIslands = function(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        searchLand(grid, i, j);
      }
    }
  }

  return count;
};
