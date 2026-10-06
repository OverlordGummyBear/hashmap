class Node {
    constructor(key = null, value = null) {
        this.key = key;
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList{
    constructor(){
        this._head = null;
        this._tail = null;
    }   

    append(key, value){
        const newLink = new Node(key, value);
            
        if(this._head === null && this._tail === null){
            this._tail = newLink;
            this._head = newLink;
        } else{
            const oldHead = this._head;
            this._head = newLink;
            this._head.nextNode = oldHead;
        }
    }

    prepend(value){
        const newLink = new Node(key, value);

        if(this._head === null && this._tail === null){
            this._tail = newLink;
            this._head = newLink;
        } else{
            const oldTail = this._tail;
            oldTail.nextNode = newLink;
            this._tail = newLink;
        }
    }

    size(){
        if(this._head === null) return 0;

        let size = 1;
        let current = this._head;

        while(current.nextNode !== null){
            size++;
            current = current.nextNode;
        }

        return size;
    }

    head(){
        if(this._head === null) return undefined;

        return this._head.value;
    }

    tail(){
        if(this._tail === null) return undefined;
        
        return this._tail.value;
    }

    at(index){
        if(this._head === null) return undefined;

        let current = this._head;
        let nodeIndex = 0;

        while(current !== null){
            if(nodeIndex === index)
                return current.key;

            nodeIndex++;
            current = current.nextNode;
        }

        return undefined;
    }

    pop(){
        if(this._head === null) return undefined;

        let oldHead = this._head;

        if(this._head === this._tail){
            this._head = null;
            this._tail = null;
        } else {
            this._head = oldHead.nextNode;
        }
     
        return oldHead.value;
    }

    replaceValue(key, value){
        if(this._head === null) return false;

        let isFound = false;
        let current = this._head;

        while(current !== null){
            if(current.key === key){
                isFound = true;
                current.value = value;
                break;
            }

            current = current.nextNode;
        }

        return isFound;
    }

    get(key){
        if(this._head === null) return undefined;

        let current = this._head;
        let item = undefined;

        while(current !== null){
            if(current.key === key){
                item = current.value;
                break;
            }

            current = current.nextNode;
        }

        return item;
    }

    contains(key){
        if(this._head === null) return false;

        let isFound = false;
        let current = this._head;

        while(current !== null){
            if(current.key === key){
                isFound = true;
                break;
            }

            current = current.nextNode;
        }

        return isFound;
    }

    findIndex(key){
        let index = 0;
        let current = this._head;

        while(current !== null){
            if(current.key === key)
                return index;

            index++;
            current = current.nextNode;
        }

        return -1;
    }

    toString(){
        if(this._head === null) return "";

        let current = this._head;
        let buildString = ""

        while(current !== null){
            buildString += `( ${current.value} ) -> `;

            current = current.nextNode;
        }

        return buildString += null;
    }
}

export default LinkedList;



