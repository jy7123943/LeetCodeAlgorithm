/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (root === null) return [];

  const rightSideValues = [root.val];
  const queue = [[root]];

  while (queue.length) {
    const depth = queue.shift();
    const nextDepth = [];

    depth.forEach((node) => {
      if (node.left) {
        nextDepth.push(node.left);
      }
      if (node.right) {
        nextDepth.push(node.right);
      }
    })

    if (nextDepth.length > 0) {
      rightSideValues.push(nextDepth[nextDepth.length - 1].val);
      queue.push(nextDepth);
    }
  }

  return rightSideValues;
};
