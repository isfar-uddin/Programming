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
var reverseList = function(head) {
    let prev = null, temp = null;
    while(head) {
        temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }

    return prev;
};

//Recursive way
var reverseList = function(head) {
  if (head === null || head.next === null) return head;

  let p = reverseList(head.next);

  head.next.next = head;
  head.next = null;
  return p;
};

