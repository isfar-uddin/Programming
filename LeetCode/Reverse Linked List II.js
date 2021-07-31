/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// Iterate twice
var reverseBetween = function(head, left, right) {
    let curr = head;
    let count = 1;
    let val = [];
    while(count <= right) {
        if(count >= left) {
            val.push(curr.val);
        }
        count++;
        curr = curr.next;
    }

    count = 1;
    curr = head;
    while(count <= right) {
        if(count >= left) {
            curr.val = val.pop();
        }
        count++;
        curr = curr.next;
    }

    return head;
};
