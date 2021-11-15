/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const temp = [];

  while (l1) {
    if (l1.val !== null) temp.push(l1);
    l1 = l1.next;
  }
  while (l2) {
    if (l2.val !== null) temp.push(l2);
    l2 = l2.next;
  }

  if (temp.length === 0) return l1;

  temp.sort((left, right) => right.val - left.val);

  return temp.reduce((nextNode, currentNode) => {
    currentNode.next = nextNode;
    return currentNode;
  }, null);
};
