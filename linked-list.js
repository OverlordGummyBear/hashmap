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

    remove(key){
        let current = this._head;
        let previous = null;

        while(current !== null){
            if(current.key === key){
                if(previous !== null){
                    previous.nextNode = current.nextNode;   
                } else {
                    this._head = current.nextNode;
                }

                current.nextNode = null;

                return true;
            }

            previous = current;
            current = current.nextNode;
        }

        return false;
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

    entries(){
        if(this._head === null) return [];

        let current = this._head;
        let entriesArr = []

        while(current !== null){
            entriesArr.push([current.key, current.value]);

            current = current.nextNode;
        }

        return entriesArr;
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