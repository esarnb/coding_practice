/**
 * First In, First Out - FIFO
 * Like a customer line, first one entered, will be helped first.
 */

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
            this.head = newNode;
        }
        else {
            while (current.next) current = current.next
            current.next = newNode;
        }
        this.size++;
    }

    /*
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
    */

    dequeue() {
        let firstElem = this.head;
        let returnNode = null;
        if (!firstElem) return ("Empty Queue");
        else if (firstElem.next) {
            returnNode = firstElem;
            firstElem = firstElem.next
            this.head = firstElem;
        }
        else {
            returnNode = firstElem;
            this.head = null
        }
        this.size--;
        return returnNode;
    }

    display() {
        console.log("=====");
        
        let curr = this.head;
        if (!curr) return console.log("Empty queue");
        

        //Display parent and all children nodes
        console.log(curr.data);
        while (curr.next) {
            curr = curr.next;
            console.log(curr.data);   
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
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.display();
myQueue.dequeue();
myQueue.display();
myQueue.dequeue();
myQueue.display();
myQueue.dequeue();
myQueue.display();
myQueue.dequeue();
myQueue.display();
myQueue.dequeue();
myQueue.display();