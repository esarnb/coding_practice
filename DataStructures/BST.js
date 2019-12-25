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
            if (!curr.left) curr.left = newNode;
            else curr.right = newNode;
            newNode.parent = curr;
            return newNode;
        }
    }

    // Display BST left to right
    display() {

        if (this.parent) {

            let curr = this.parent;
            console.log(curr.data);

            while (curr.left || curr.right) {
                if (curr.left) curr = curr.left;
                else curr = curr.right;
                console.log(curr.data);
            }
            
        }

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