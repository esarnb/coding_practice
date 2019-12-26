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

    /**
     * Function creates a new Node and traverses the BST based on high/low order to insert the child.
     * 
     * @param {Integer} data -The new element to be added into the tree.
     */
    addNode(data) {
        // Initialize element into a node
        let newNode = new Node(data);
        let curr = this.parent; // Main parent node
        let inserted = false; // Var to break while loop - when a spot is found for the node.
        // If the BST list is empty, make this the first node.
        if (!curr) this.parent = newNode;

        else {
            // Keep iterating until a spot is found for the node.
            while (!inserted) {
                // Every time curr is changed, newNode's parent is set to current
                newNode.parent = curr;

                // If new element is < current node's element, choose left. Else choose right.
                if (newNode.data < curr.data) {
                    // If the spot is taken, iterate again.
                    if (curr.left) curr = curr.left;
                    else {
                        curr.left = newNode
                        inserted = true; // End the while loop.
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
    /**
     * Function displays all nodes in the BST, a node's parent value and it's own value
     */
    display() {
        // Helper function to recursively iterate through tree.
        function _iterate(node) {
            // If the current node exists, print it's parent and current value
            if (node) {
                console.log(`Parent: ${node.parent ? node.parent.data : "None"} Current: ${node.data}`);
                
                // if it has a right child, there is a left, iterate into both.
                if (node.right) {
                    _iterate(node.left)
                    _iterate(node.right)
                }
                else if (node.left) _iterate(node.left)
            }
        }
        
        // If there's a node, begin loop. Else, empty list = no data.
        if (this.parent) _iterate(this.parent)
        else console.log("No data");
    }

    /**
     * Display BST as a sorted list of values
     */
    sorted() {
        let sorted = []; // Push all values into helper list
        /**
         * Function inserts all values into sorted list: 
         *      
         *      
         * @param {Object} node The object current node in question
         */
        function _iterate(node) {
            if (node) { // if there is a parent's child...
                _iterate(node.left) // if there is a left child, the value is smaller than current, print it first,
                sorted.push(node.data) // else print current value
                _iterate(node.right) // and then if there is a right child, print it last.
            }
        }

        // Print list if there are nodes, else no data.
        this.parent ? _iterate(this.parent) : console.log("No data");
        console.log(sorted.join(", ")); // Join the array into a string list.
    }
}


let myBST = new BST();
myBST.addNode(5)
myBST.addNode(3)
myBST.addNode(7)
myBST.addNode(2)
myBST.addNode(1)
myBST.addNode(4)
myBST.addNode(6)
myBST.addNode(8)
myBST.display()
myBST.sorted()
