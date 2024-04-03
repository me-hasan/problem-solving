class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;

        }
        this.length++;
        return this
    } 

    pop(){
        if(!this.head) return undefined;
        var currentTail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = currentTail.prev;
            this.tail.next = null;
        }
        this.length --;
        return currentTail;
    }
}

var list = new DoublyLinkList();
list.push(100);
list.push(90);
list.push(70);
list.pop()

console.log(list)

