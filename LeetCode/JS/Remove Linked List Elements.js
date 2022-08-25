/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let prev = null,
    curr = head;

  while (curr) {
    if (prev === null && curr.val === val) {
      head = head.next;
      curr = head;
      continue;
    } else if (curr.val === val) {
      prev.next = curr.next;
      curr = curr.next;
      continue;
    }

    prev = curr;
    curr = curr.next;
  }

  return head;
};
