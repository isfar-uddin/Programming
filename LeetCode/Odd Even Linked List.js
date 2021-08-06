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
var oddEvenList = function(head) {
    if(!head || !head.next) return head;

    let tail = head, tempTail = null, prev = null, curr = head, count = 1;

    while(tail.next) {
        tail = tail.next;
        tempTail = tail;
    }

    while(curr !== tail) {
        if(count % 2 === 0 ) {
            tempTail.next = curr;
            tempTail = curr;
            prev.next = curr.next;
            curr = curr.next;
            count++;
        } else {
            prev = curr;
            curr = curr.next;
            count++;
        }
    }

    if(count % 2 === 0 ) {
        tempTail.next = tail;
        prev.next = tail.next;
        tail.next = null;
    } else {
        tempTail.next = null;
    }

    return head;
};
