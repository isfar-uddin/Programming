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
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;
    if(l1.val > l2.val) return mergeTwoLists(l2, l1);

    let prevL1 = null, prevL2 = null;
    let mergeList = l1;

    while(l1 && l2) {
        while(l1 && l1.val <= l2.val) {
            prevL1 = l1;
            l1 = l1.next;
        }

        prevL1.next = l2;
        prevL1 = prevL1.next;

        if(!l1) break;

        while(l2 && l2.val <= l1.val) {
            prevL2 = l2;
            l2 = l2.next;
        }

        prevL1 = prevL2;
        prevL1.next = l1;
    }

    return mergeList;
};
