class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    addNode = (data) => {
        let newNode = new Node(data); //Create a new node to insert
        
        // If there are no nodes in the list, add the first node
        if (!this.head) { 
            this.head = newNode;
            this.size++;
        }
        // If there is a node, go to the end of the list and add the node to the end
        else {
            let current = this.head;  // Reference current node parent
            while (current.next) current = current.next; 
            current.next = newNode; 
            this.size++; 
        }
    }

    display() {
        console.log("=====");
        let list = this.head;
        if (list) {
            console.log(list.data); //Display parent node
            while (list.next) {
                list = list.next;
                console.log(list.data); //Display all children
            }            
        }
        else console.log("No Data");
    }

    /**
     * Removes the first matching data element
     * 
     * @param {Any} data The element inputted by user to remove from the list.
     */
    removeNode(data) {
        let curr = this.head;
        let prev = undefined;
        let count = 0, foundNode = false;

        // Iterate through entire LL and stop when finding first same node
        while (count < this.size && !foundNode) {
            //If the node is  a match
            if (curr.data === data) {
                // If the node is a parent element
                if (count == 0) {
                    // If parent has child, set child as parent, else null.
                    if (curr.next) {
                        this.head = curr.next
                    }
                    else {
                        this.head = null
                    }
                }
                // If the node is inbetween 2 nodes, skip current by connecting parent's and child's reference.
                else {
                    prev.next = curr.next
                }
                foundNode = true
            }

            // Did not find matching node, continue to the next one.
            else {
                prev = curr;
                curr = curr.next;
                count++;
            }
        }
        if (!foundNode) return console.log("Could not find data element in list.");
        
    }
}

let mylist = new LinkedList()
mylist.addNode(1);
mylist.addNode(2);
mylist.addNode(3);
mylist.addNode(4);
mylist.addNode(5);
mylist.display();

mylist.removeNode(3);
mylist.display();
mylist.removeNode(2);
mylist.display();
mylist.removeNode(1);
mylist.display();
mylist.removeNode(5);
mylist.display();
mylist.removeNode(4);
mylist.display();