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

        // If BST empty, this is this highest parent node
        if (!this.parent) this.parent = node;
        else {
            // Iterate through the BST - lowest element route
            let curr = this.parent;

            // choose child on left/right position, else pick left
            // let choose = (curr.left || curr.right) || curr.left ;
            let choose = 1;

            // While the parent has child on either position
            while (choose) {
            
                // If the newNode is < parent, choose left

                // else choose right

                // repeat above until there is a spot to insert the node
            }

            // Insert the new node into the free position
        }

    }
}


let myBST = new BST();