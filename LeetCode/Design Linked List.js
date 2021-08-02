/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = null;
  this.createNewNode = value => ({ value: value, next: null });
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let currentNode = this.head;
  let count = 0;

  while (count <= index && currentNode) {
    if (count === index) return currentNode.value;
    currentNode = currentNode.next;
    count++;
  }

  return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let newNode = this.createNewNode(val);

  if (this.head) {
    newNode.next = this.head;
    this.head = newNode;
  } else {
    this.head = newNode;
  }
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let newNode = this.createNewNode(val);

  if (this.head) {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  } else {
    this.head = newNode;
  }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  let newNode = this.createNewNode(val);
  let currentNode = this.head;
  let prevNode = this.head;
  let count = 0;

  while (currentNode && count <= index) {
    if (count === index) {
      newNode.next = currentNode;
      prevNode.next = newNode;
      break;
    }
    prevNode = currentNode;
    currentNode = currentNode.next;
    count++;
  }

  if (count === index) {
    prevNode.next = newNode;
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let currentNode = this.head;
  let prevNode = null;
  let count = 0;

  if (index === 0) {
    this.head = this.head ? this.head.next : null;
    return;
  }

  while (currentNode && count <= index) {
    if (count === index) {
      prevNode.next = currentNode.next;
      break;
    }

    prevNode = currentNode;
    currentNode = currentNode.next;
    count++;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
