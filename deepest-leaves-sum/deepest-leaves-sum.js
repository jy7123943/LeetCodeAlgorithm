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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  let lastLevel = 0;
  let result = 0;

  function recursive(root, level = 0) {
    if (level === lastLevel) {
      result += root.val;
    }
    if (level > lastLevel) {
      result = root.val;
      lastLevel = level;
    }

    if (root.left) {
      recursive(root.left, level + 1)
    }
    if (root.right) {
      recursive(root.right, level + 1)
    }
  }

  recursive(root, 0);

  return result;
};
