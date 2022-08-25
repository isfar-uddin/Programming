/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !k) return head;

    let length = 1;
    let prev = head;

    while(prev.next) {
        prev = prev.next;
        length++;
    }
    prev.next = head;
    k = length - (k % length);

    while(k) {
        head = head.next;
        prev = prev.next;
        k = k - 1;
    }

    prev.next = null;

    return head;
};
