/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  function getLeafValues(root, leafValues = []) {
    if (root === null) {
      return leafValues;
    }

    if (root.left === null && root.right === null) {
      leafValues.push(root.val);
    }

    getLeafValues(root.left, leafValues);
    return getLeafValues(root.right, leafValues);
  }

  return getLeafValues(root1).join(',') === getLeafValues(root2).join(',');
};
