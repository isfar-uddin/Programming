/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0 || lists.length === 1) return lists[0] || null;
  let root = lists[0];
  for (let i = 1; i < lists.length; i++) {
    root = mergeTwoLists(root, lists[i]);
  }

  return root;
};

function mergeTwoLists(l1, l2) {
  if (!l1 || !l2) return l1 || l2;

  let dummy = new ListNode(0);
  let p = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }

    p = p.next;
  }
  if (l1) p.next = l1;
  if (l2) p.next = l2;

  return dummy.next;
}
