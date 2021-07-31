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


// Using stack
// Follow up task without using reversing input list
var addTwoNumbers = function(l1, l2) {
    let l1Stack = [];
    let l2Stack = [];
    let carry = 0;

    let ansList = new ListNode(0, null);
    let node = ansList;

    while(l1) {
        l1Stack.push(l1.val);
        l1 = l1.next;
    }

    while(l2) {
        l2Stack.push(l2.val);
        l2 = l2.next;
    }
    while(l1Stack.length > 0 || l2Stack.length > 0) {
        let val1 = l1Stack.length > 0 ? l1Stack.pop() : 0;
        let val2 = l2Stack.length > 0 ? l2Stack.pop() : 0;
        let sum = val1 + val2 + carry;
        if(sum > 9) {
            carry = 1;
            ansList.val = sum - 10;
        } else {
            carry = 0;
            ansList.val = sum;
        }

        let node = new ListNode(carry, ansList);
        ansList = node;
    }

    return ansList.val === 0 ? ansList.next : ansList;
};
