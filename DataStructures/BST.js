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
        let prev = curr; // Previous parent picked

        // If BST empty, this is this highest parent node
        if (!curr) this.parent = newNode;
        else {
            // While there is a node at the left/right (lower/higher) position
            while (curr.left || curr.right) {

                prev = curr; // Record parent node before iterating into a child
            
                // If the newNode is < parent, choose left
                if (newNode.data < curr.data) {
                    curr = curr.left
                }
                // else choose right
                else if (newNode.data > curr.data) {
                    curr = curr.right
                }
                // else: if both are ==, void it

                // repeat above until there is a spot to insert the node
            }

            // Set parent as current's parent node and Insert the new node into the current free position
            newNode.parent = prev;
            curr = newNode;

            console.log(`Prev: ${prev.data} Curr: ${curr.data}`);
            
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