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
        let returnNode = this.head;
        
        if (!this.head) return console.log("Empty Stack");
        else if (this.head.next) {
            this.head = this.head.next; //Set parent to next
        }
        else {
            this.head = null;
        }

        this.size--;

        return returnNode;
    }

    peek() {
        if (!this.head) return "Empty Stack"
        else return this.head.data
    }

    display() {
        console.log("=====");
        
        if (!this.head) return "Empty Stack"
        else {
            let curr = this.head
            console.log(curr.data);
            while (curr.next) {
                curr = curr.next;
                console.log(curr.data);
            }
        }
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
console.log("Peek: ",myStack.peek())
myStack.push(2);
console.log("Peek: ",myStack.peek())
myStack.push(3);
console.log("Peek: ",myStack.peek())
myStack.push(4);
console.log("Peek: ",myStack.peek())
myStack.push(5);
myStack.display()

myStack.display()
console.log("Peek: ",myStack.peek())
myStack.pop();

myStack.display()
console.log("Peek: ",myStack.peek())
myStack.pop();

myStack.display()
console.log("Peek: ",myStack.peek())
myStack.pop();

myStack.display()
console.log("Peek: ",myStack.peek())
myStack.pop();

myStack.display()
console.log("Peek: ",myStack.peek())
myStack.pop();

myStack.display()
console.log("Peek: ",myStack.peek())
myStack.pop();
