class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.parent = null;
    }

    addNode(data) {
        // Initialize element into a node
        let newNode = new Node(data);
        let curr = this.parent; // Main parent node
        let inserted = false;
        // If the BST list is empty, make this the first node.
        if (!curr) this.parent = newNode;

        else {
            while (!inserted) {
                newNode.parent = curr;
                if (newNode.data < curr.data) {
                    if (curr.left) curr = curr.left;
                    else {
                        curr.left = newNode
                        inserted = true;
                    }
                }
                else if (newNode.data > curr.data) {
                    if (curr.right) curr = curr.right;
                    else {
                        curr.right = newNode
                        inserted = true;
                    }
                }
            }
        }
        return newNode;
    }

    // Display BST left to right
    display() {
        function _iterate(node) {
            if (node) {
                console.log(`P: ${node.parent ? node.parent.data : "None"} C: ${node.data}`);
                if (node.right) {
                    _iterate(node.left)
                    _iterate(node.right)
                }
                else if (node.left) {
                    _iterate(node.left)
                }
            }
        }
        
        if (this.parent) _iterate(this.parent)
        else console.log("No data");
    }

    // Display BST in sorted form
    sorted() {

    }
}


let myBST = new BST();
myBST.addNode(5)
myBST.addNode(3)
myBST.addNode(7)
myBST.addNode(2)
myBST.addNode(4)
myBST.addNode(6)
myBST.addNode(8)
myBST.display()