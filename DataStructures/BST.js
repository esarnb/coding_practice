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

        if (!curr) this.parent = newNode;
        else {
            while (curr.right) curr = curr.right;
            newNode.parent = curr;
            if (!curr.left) curr.left = newNode;
            else curr.right = newNode;
            return newNode;
        }
    }

    // Display BST left to right
    display() {
        function _iterate(node) {
            if (node) {
                console.log(node.data);
                if (node.right) {
                    _iterate(node.left)
                    _iterate(node.right)
                }
                else if (node.left) {
                    _iterate(node.left)
                }
            }
        }

        // if (this.parent) {

        //     let curr = this.parent;
        //     console.log(`Parent: ${ curr.parent ? curr.parent.data : "Null"} Current: ${curr.data}`);

        //     while (curr.left || curr.right) {
        //         if (curr.left) curr = curr.left;
        //         else curr = curr.right;
        //         console.log(`Parent: ${curr.parent ? curr.parent.data : "Null"} Current: ${curr.data}`);
        //     }
        //     //console.log(`Parent: ${curr.parent ? curr.parent.data : "Null"} Current: ${curr.data}`);
            
        // }
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