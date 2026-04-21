import LinkedList from "./linked-lists/linked-list.js";
export class HashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.size = 0;
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
        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }

        const hashCode = this.hash(key);
        let currentBucket = this.buckets[hashCode];

        if(typeof currentBucket === 'undefined') {
            const list = new LinkedList();
            this.buckets[hashCode] = list;
            currentBucket = list;
        }
        const isNewKey = currentBucket.update(key, value);
        if(isNewKey) this.size++;
    }
    get(key) {
        const bucket = this.buckets[this.hash(key)];
        return bucket ? bucket.get(key) : null;
    }
    has(key) {
        const bucket = this.buckets[this.hash(key)];
        return bucket ? bucket.contains(key) : false;
    }
    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (!bucket) return false;

        const removed = bucket.remove(key);
        
        if(removed) {
            this.size--;
        }

        return removed;
    }
    length() {
        return this.size;
    }
    clear() {
        this.buckets = new Array(this.capacity);
    }
    keys() {
        let arr = [];
        for(let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i]) {
                arr.push(...this.buckets[i].getKeys());
            }
        }
        return arr;
    }
    values() {
        let arr = [];
        for(let bucket of this.buckets) {
            if(bucket) {
                arr.push(...bucket.getValues());
            }
        }
        return arr; 
    }
    entries() {
        let arr = [];
        for(let bucket of this.buckets) {
            if(bucket) {
                arr.push(...bucket.getEntries());
            }
        }
        return arr; 
    }
    resize() {
        const oldBuckets = this.buckets;
    
        this.capacity *= 2;
        this.buckets = new Array(this.capacity);
        this.size = 0;
    
        for (let bucket of oldBuckets) {
            if (!bucket) continue;
    
            let node = bucket.head;
            while (node) {
                this.set(node.key, node.value);
                node = node.next;
            }
        }
    }
}