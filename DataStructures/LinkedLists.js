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
        let list = this.head;
        if (list) {
            console.log(list.data);
            while (list.next) {
                list = list.next;
                console.log(list.data);
            }            
        }
        else console.log("No Data");
    }
}

let mylist = new LinkedList()
mylist.addNode(1);
mylist.addNode(2);
mylist.addNode(3);
mylist.addNode(4);
mylist.addNode(5);
mylist.display()
