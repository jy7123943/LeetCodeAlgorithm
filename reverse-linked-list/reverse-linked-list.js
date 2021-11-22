/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head, result = null) {
  if (head === null) return result;

  const nextNode = head.next;
  head.next = result;

  return reverseList(nextNode, head);
};
