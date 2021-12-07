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
  let maxLevel = 0;
  let result = 0;

  function treeTraversal(root, level = 0) {
    if (level === maxLevel) {
      result += root.val;
    }
    if (level > maxLevel) {
      result = root.val;
      maxLevel = level;
    }

    if (root.left) {
      treeTraversal(root.left, level + 1)
    }
    if (root.right) {
      treeTraversal(root.right, level + 1)
    }
  }

  treeTraversal(root);

  return result;
};
