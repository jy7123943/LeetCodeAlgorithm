/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  if (source === destination) return true;

  const edgeMap = edges.reduce((map, [left, right]) => {
    if (map.has(left)) {
      map.get(left).add(right);
    } else {
      map.set(left, new Set([right]));
    }

    if (map.has(right)) {
      map.get(right).add(left);
    } else {
      map.set(right, new Set([left]));
    }
    return map;
  }, new Map());

  if (edgeMap.size === 0) return false;

  const passed = new Set();

  const queue = [...edgeMap.get(source)];

  while (queue.length) {
    const edge = queue.pop();

    if (passed.has(edge)) continue;
    if (edgeMap.get(edge).has(destination)) return true;

    passed.add(edge);
    queue.push(...edgeMap.get(edge));
  }

  return false;
};
