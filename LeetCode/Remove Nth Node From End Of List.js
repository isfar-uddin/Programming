/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//Two pass
var removeNthFromEnd = function(head, n) {
  let count = 0,
    curr = head;

  while (curr) {
    count++;
    curr = curr.next;
  }

  if (count === n) {
    head = head.next;
    return head;
  }

  let nodeCount = 1,
    prev = head;
  curr = head;
  while (count - nodeCount !== n - 1) {
    prev = curr;
    curr = curr.next;
    nodeCount++;
  }

  prev.next = curr.next;

  return head;
};

//One pass
var removeNthFromEnd = function(head, n) {
  let tempNode = new ListNode(0);
  tempNode.next = head;
  let firstNode = tempNode,
    secondNode = tempNode;

  for (let i = 0; i <= n; i++) {
    firstNode = firstNode.next;
  }

  while (firstNode) {
    firstNode = firstNode.next;
    secondNode = secondNode.next;
  }

  secondNode.next = secondNode.next.next;

  return tempNode.next;
};
