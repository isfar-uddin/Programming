/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slowPointer = head, fastPointer = head;

    while(slowPointer && fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;

        if(slowPointer === fastPointer) {
            return true;
        }
    }

    return false;
};

// Add brute force but modifying actual data
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let pointer = head;

    while(pointer) {
        if(pointer.val === Infinity) return true;

        pointer.val = Infinity;
        pointer = pointer.next;
    }

    return false;
};


// Brute force without modifying the actual linked list
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let listOfPointers = [];

    while(head) {
        if(listOfPointers.includes(head)) return true;
        listOfPointers.push(head);
        head = head.next;
    }

    return false;
};
