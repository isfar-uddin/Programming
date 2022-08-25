/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return head;
    let curr = head;
    while(curr) {
        let node = new Node(curr.val);
        let temp = curr.next;
        curr.next = node;
        curr.next.next = temp;
        curr = temp;
    }

    curr = head;

    while(curr) {
        if(curr.next) {
            curr.next.random = curr.random ? curr.random.next : curr.random;   
        }
        curr = curr.next ? curr.next.next : curr.next;
    }

    let copyHead = head.next, cCurr = head.next;
    curr = head;

    while(curr && cCurr) {
        curr.next = curr.next ? curr.next.next : curr.next;
        cCurr.next = cCurr.next ? cCurr.next.next : cCurr.next;
        curr = curr.next;
        cCurr = cCurr.next;
    }

    return copyHead;
};
