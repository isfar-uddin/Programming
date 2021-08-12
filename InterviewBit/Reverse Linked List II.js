// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //param C : integer
  //return the head node in the linked list
  reverseBetween: function(A, B, C) {
    if (B === C || !A || !A.next) return A;

    let curr = A;
    let prev = A;
    let start = A;
    let prevStart = A;
    let count = 1;
    while (curr) {
      while (count > B && count < C) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
        count++;
      }
      if (count === B) {
        prevStart = prev;
        start = curr;
        prev = curr;
        curr = curr.next;
      } else if (count === C) {
        prevStart.next = curr;
        start.next = curr.next;
        curr.next = prev;
        break;
      } else {
        prev = curr;
        curr = curr.next;
      }
      count++;
    }
    if (B === 1) return curr;
    return A;
  },
};
