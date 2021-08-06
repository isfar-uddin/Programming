/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// O(N) time and O(1) space complexity
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    while(slow && fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if(fast !== null) {
        slow = slow.next;
    }

    slow = reverseHead(slow);

    while(slow !== null) {
        if(slow.val !== head.val) {
            return false;
        }

        slow = slow.next;
        head = head.next;
    }

    return true;

};

function reverseHead(node) {
    let prev = null, temp = null;

    while(node) {
        temp = node.next;
        node.next = prev;
        prev = node;
        node = temp;
    }

    return prev;
}

// O(N) both time and space complexity
var isPalindrome = function(head) {
    let curr = head, rHead = null;

    while(curr) {
        let node = new ListNode(curr.val, null);
        node.next = rHead;
        rHead = node;
        curr = curr.next;
    }

    while(head) {
        if(head.val !== rHead.val) {
            return false;
        }
        head = head.next;
        rHead = rHead.next;
    }

    return true;
};
