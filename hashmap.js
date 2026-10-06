import LinkedList from "./linked-list.js";

class HashMap{
    #_capacity = 16;
    #_loadFactor = 0.75;
    #_numberEntries = 0;
    #_buckets;

    constructor(){
        this.#_buckets = new Array(16);

        for(let i = 0; i < this.#_capacity; i++){
            this.#_buckets[i] = new LinkedList();
        }
    }

    //Use snippet whenever accessing a bucket through an index
    /*
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
    */


    #hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#_capacity;
        }

        return hashCode;
    } 

    #resize(){
        if(this.#_capacity * this.#_loadFactor < this.#_numberEntries + 1){

        }
    }

    set(key, value){

    }

    length(){ 
        return this.#_numberEntries;
    }

}

export default HashMap;