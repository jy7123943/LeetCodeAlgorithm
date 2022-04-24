/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) return 0;

  let depthCount = 1;
  const queue = [[root]];

  while (queue.length) {
    const depth = queue.shift();
    const nextDepth = [];
    
    depth.forEach((node) => {
      if (node && node.children.length > 0) {
        nextDepth.push(...node.children);
      }
    })

    if (nextDepth.length > 0) {
      depthCount++;
      queue.push(nextDepth);
    }
  }

  return depthCount;
};
