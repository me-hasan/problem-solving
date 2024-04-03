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
            currentTail.prev = null;
        }
        this.length --;
        return currentTail;
    }


    shift(){
        if(!this.head) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
        this.length --;
        return oldHead;
    }

    unshift(val){
        var newNode = new Node(val);
        if(this.head === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(index !== count){
                current = current.next;
                count ++;
            }
            return current;
        }else{
            count = this.length - 1;
            current = this.tail;
            while(index !== count){
                current = current.prev;
                count --;
            }
            return current;
        }
    }
}

var list = new DoublyLinkList();
list.push(100);
list.push(90);
list.push(80);
list.push(70);
list.unshift(12)


console.log(list.get(0))

