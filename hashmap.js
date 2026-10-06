import LinkedList from "./linked-list.js";

class HashMap{
    #_capacity = 16;
    #_loadFactor = 0.75;
    #_numberEntries = 0;
    #_buckets;

    constructor(){
        this.#_buckets = new Array(this.#_capacity);

        for(let i = 0; i < this.#_capacity; i++){
            this.#_buckets[i] = null;
        }
    }

    getBuckets(){ return this.#_buckets; }

    #hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#_capacity;
        }

        return hashCode;
    } 

    #resize(){
        const oldEntries = this.entries();
        this.#_capacity = this.#_capacity * 2;
        this.#_buckets = new Array(this.#_capacity);

        for(let i = 0; i < this.#_capacity; i++){
            this.#_buckets[i] = null;
        }

        oldEntries.forEach(entry => {
            const index = this.#hash(entry[0]);

            if (index < 0 || index >= this.#_buckets.length) {
                throw new Error("Trying to access index out of bounds");
            }

            if(this.#_buckets[index] === null){
                this.#_buckets[index] = new LinkedList();
                this.#_buckets[index].append(entry[0], entry[1]);
            } else {
                this.#_buckets[index].append(entry[0], entry[1]);
            }
        })
    }

    set(key, value){
        const index = this.#hash(key);

        if (index < 0 || index >= this.#_buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if(this.#_buckets[index] === null){
            this.#_buckets[index] = new LinkedList();
            this.#_buckets[index].append(key, value);
            this.#_numberEntries++;
        } else {
            if(!this.#_buckets[index].replaceValue(key, value)){
                this.#_buckets[index].append(key, value);
                this.#_numberEntries++;

                if(this.#_capacity * this.#_loadFactor < this.#_numberEntries){
                    this.#resize();
                }
            }
        }
    }

    get(key){
        const index = this.#hash(key);

        if (index < 0 || index >= this.#_buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        return this.#_buckets[index] === null ? undefined : this.#_buckets[index].get(key);
    }

    has(key){
        const index = this.#hash(key);

        if (index < 0 || index >= this.#_buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        return this.#_buckets[index] === null ? false : this.#_buckets[index].contains(key);
    }

    remove(key){
        const index = this.#hash(key);

        if (index < 0 || index >= this.#_buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if(this.#_buckets[index] === null){
            return false;
        } 

        if(this.#_buckets[index].contains(key)){
            this.#_buckets[index].remove(key);
            this.#_numberEntries--;

            return true;
        }

        return false;
    }

    length(){ 
        return this.#_numberEntries;
    }

    clear(){
        for(let i = 0; i < this.#_capacity; i++){
            this.#_buckets[i] = null;
        }

        this.#_numberEntries = 0;
    }

    keys(){
        let keys = []

        this.#_buckets.forEach((bucket) => {
            if(bucket !== null){
                keys = [...keys, ...bucket.entries()]
            }
        });

        keys = keys.map((entry) => entry[0]);

        return keys;
    }

    values(){
        let values = []

        this.#_buckets.forEach((bucket) => {
            if(bucket !== null){
                values = [...values, ...bucket.entries()]
            }
        });

        values = values.map((entry) => entry[1]);

        return values;
    }

    entries(){
        let entries = []

        this.#_buckets.forEach((bucket) => {
            if(bucket !== null){
                entries = [...entries, ...bucket.entries()]
            }
        });

        return entries;
    }
}

export default HashMap;