class Queue {
    constructor() {
        this.head = null
        this.size = null
    }

    addNode(data) {
        let newNode = new Node(data);
        let current = this.head;
        if (!current) {
            current = newNode;
            this.size++;
        }
        else {
            while (current.next) current = current.next
            current.next = newNode;
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let myQueue = new Queue()
myQueue.addNode(5);
myQueue.addNode(4);
myQueue.addNode(3);
myQueue.addNode(2);
myQueue.addNode(1);
