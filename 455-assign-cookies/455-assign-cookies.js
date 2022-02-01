/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let childIndex = 0;

  const sortedChildren = g.slice().sort((l, r) => l - r);
  const sortedCookies = s.slice().sort((l, r) => r - l);

  while (sortedCookies.length) {
    if (sortedCookies.pop() >= sortedChildren[childIndex]) {
      childIndex++;
    }
  }
  return childIndex;
};
