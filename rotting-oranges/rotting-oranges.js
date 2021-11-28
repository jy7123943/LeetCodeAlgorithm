/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function(grid) {
  const queue = [];
  let fresh = 0;
  let min = -1;

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (grid[x][y] === 2) {
        queue.push([x, y])
      } else if (grid[x][y] === 1) {
        fresh++;
      }
    }
  }
  if (fresh === 0) return 0;

  while (queue.length) {
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const [x, y] = queue.shift();

      if (grid[x][y - 1] === 1) {
        grid[x][y - 1] = 2;
        queue.push([x, y - 1]);
        fresh--;
      }
      if (grid[x][y + 1] === 1) {
        grid[x][y + 1] = 2;
        queue.push([x, y + 1]);
        fresh--;
      }
      if (grid[x + 1]?.[y] === 1) {
        grid[x + 1][y] = 2;
        queue.push([x + 1, y]);
        fresh--;
      }
      if (grid[x - 1]?.[y] === 1) {
        grid[x - 1][y] = 2;
        queue.push([x - 1, y]);
        fresh--;
      }
    }

    min++;
  }
  return fresh === 0 ? min : -1;
};
