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

    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }


    insert(index, val){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforNode = this.get(index-1);
        var afterNode = beforNode.next;
        beforNode.next = newNode;
        newNode.prev = beforNode;
        afterNode.prev = newNode;
        newNode.next = afterNode;
        this.length ++;
        return true; 
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.push();

        var removeNode = this.get(index);
        var beforNode = removeNode.prev;
        var afterNode = removeNode.next;
        beforNode.next = afterNode;
        afterNode.prev = beforNode;
        removeNode.next = null;
        removeNode.prev = null;
        this.length --;
        return removeNode;
    }
}

var list = new DoublyLinkList();
list.push(100);
list.push(90);
list.push(80);
list.push(70);
// list.unshift(12)
// list.set(2, 300)
// list.insert(1, 50)
list.remove(1)



console.log(list.get(1))

