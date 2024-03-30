class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this
    } 


    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
            while(current.next){
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return current;
    }

    shift(){
        if(!this.head) return undefined;
        var currntHead = this.head;
        this.head = currntHead.next;
        this.length --;
        if(this.length === 0){
            this.tail = null    
        }
        return currntHead;
    }

    unshift(val){
        var newNode  = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined;
        var count = 0;
        var current = this.head;
        while(index !== count){
            current = current.next;
            count ++;
        }
        return current;
    }

    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true; 
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        var prev = this.get(index - 1);
        var temp = this.get(index);
        var newNode = new Node(val);
        prev.next = newNode;
        newNode.next = temp;
        this.length ++;
        return true;
    }

    removed(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index == this.length -1) return this.pop();
        var prev = this.get(index -1);
        var remove = this.get(index);
        prev.next = remove.next;
        this.length --;
        return remove;
    }
}


var list = new SinglyLinkedList();
list.push('Hello');
list.push('Man');
list.push('Man1');
list.push('Khayrul');

// list.pop();
// list.pop();
// list.pop();

// list.shift()
// list.shift()
// list.shift()
// list.shift()

// list.unshift("Jumu");
// list.unshift("Ibnat");

// var result = list.get(3)
// var result = list.set(1, 'Women')

// var result = list.insert(4, 'Lady');

result = list.removed(3);

console.log(list)
console.log(result)