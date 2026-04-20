import LinkedList from "./linked-lists/linked-list.js";
export class HashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.buckets = new Array(this.capacity);   
    }
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
      
        return hashCode % this.buckets.length;
    }
    set(key, value) {
        const hashCode = this.hash(key);
        let currentBucket = this.buckets[hashCode];

        if(typeof currentBucket === 'undefined') {
            const list = new LinkedList();
            this.buckets[hashCode] = list;
            currentBucket = list;
        }
        currentBucket.update(key, value);
    }
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        return bucket.get(key);
    }
    has(key) {
        const index = this.has(key);
        const bucket = this.buckets[index];
        return bucket.contains(key);
    }
}