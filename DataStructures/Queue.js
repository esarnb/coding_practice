class Queue {
    constructor() {
        this.head = null
        this.size = null
    }

    // Add a node to the queue
    enqueue(data) {
        let newNode = new Node(data);
        let current = this.head;
        if (!current) {
            current = newNode;
        }
        else {
            while (current.next) current = current.next
            current.next = newNode;
        }
        this.size++;
    }

    dequeue() {
        let curr = this.head;
        let prev = undefined;

        if (!curr) return false;

        // If there is a node in queue, iterate to the end
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }

        let returnNode = curr; //Save last node
        if (!prev) this.head = null; // If node is parent, set parent to null
        else prev.next = null; // Set current end node to null

        this.size--;

        return returnNode;
    }


}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let myQueue = new Queue()
myQueue.enqueue(5);
myQueue.enqueue(4);
myQueue.enqueue(3);
myQueue.enqueue(2);
myQueue.enqueue(1);
myQueue.dequeue();