class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertNode(value) {
        let newNode = new Node(value);

        if(this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while(current) {
            if(current.value < value) {
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            } else {
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
        }
    }

    findNode(value) {
        if(!this.root) return false;
        let current = this.root;

        while(current) {
            if(current.value === value) {
                return true;
            }

            if(current.value >= value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
}

var BinaryTree = new BinarySearchTree();

let arr = [20, 25, 17, 13, 22, 18, 33, 45, 14, 30, 10]

arr.forEach(el => {
    BinaryTree.insertNode(el);
})

console.log('isFound: ', BinaryTree.findNode(17));
