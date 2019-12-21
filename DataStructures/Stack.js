/**
 * Stack - LIFO - Last in First Out
 * Like record players (or like redo/undo)
 */


class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(data) {
        let newNode = new Node(data)

        //Set node as first element
        if (!this.head) this.head = newNode;
        //Push first element after new element
        else {
            newNode.next = this.head
            this.head = newNode;
        }

        this.size++;
    }

    pop() {

        // Set parent node to current and to return.
        let current = this.head;
        let returnNode = current;
        
        if (!current) return console.log("Empty Stack");
        else if (current.next) {
            current = current.next; //Set parent to next
        }
        else {
            current = null;
        }

        this.size--;

        return returnNode;
    }

    peek() {
        //
    }

    display() {
        //
    }

}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.pop();

