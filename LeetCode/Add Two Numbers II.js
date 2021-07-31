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
// Reversed the two link lists and return the reversed ansList
var addTwoNumbers = function(l1, l2) {
    let reversedL1 = reverseNode(l1);
    let reversedL2 = reverseNode(l2);
    let carry = 0;
    let ansList = new ListNode(0, null);
    let node = ansList;

    while(reversedL1 || reversedL2) {
        let val1 = reversedL1 ? reversedL1.val : 0;
        let val2 = reversedL2 ? reversedL2.val : 0;
        let sum = val1 + val2 + carry;
        if(sum > 9) {
            carry = 1;
            sum = sum - 10;
        } else {
            carry = 0;
        }
        node.next = new ListNode(sum, null);
        if(reversedL1) reversedL1 = reversedL1.next;
        if(reversedL2) reversedL2 = reversedL2.next;
        node = node.next;
    }

    if(carry === 1) {
        node.next = new ListNode(carry, null);
    }

    return reverseNode(ansList.next);
};

function reverseNode(node) {
    let prev = null;
    while(node) {
        let temp = node.next;
        node.next = prev;
        prev = node;
        node = temp;
    }

    return prev;
}
