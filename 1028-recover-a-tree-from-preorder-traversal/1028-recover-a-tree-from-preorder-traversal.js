/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
  const levels = Array.from(traversal.matchAll(/\-+/g), ([level]) => level.length);
  const nums = Array.from(traversal.matchAll(/\d+/g), ([number]) => Number(number));

  const root = new TreeNode(nums.shift());
  const treeNodesByLevel = [root];

  let idx = 0;

  while (idx < nums.length) {
    const node = new TreeNode(nums[idx]);
    const level = levels[idx];
    const parentNode = treeNodesByLevel[level - 1];

    if (!parentNode.left) {
      parentNode.left = node;
    } else if (!parentNode.right) {
      parentNode.right = node;
    }

    treeNodesByLevel[level] = node;
    idx++;
  }

  return root;
};
