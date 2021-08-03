/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//Floyd's cycle detection algorithm
var detectCycle = function(head) {
    let slowPointer = detectLoop(head);
    if(!slowPointer) return null;

    let fastPointer = head;

    while(slowPointer !== fastPointer) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }

    return slowPointer;
};


function detectLoop(node) {
    let slowPointer = node, fastPointer = node;

    while(slowPointer && fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;

        if(slowPointer === fastPointer) {
            return slowPointer;
        }
    }

    return null;
}
