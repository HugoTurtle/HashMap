import Node from "./node.js"
export default class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    append(key, value) {
        const newNode = new Node(key, value)
        if(!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.length++;
    }
    update(key, value) {
        let node = this.head;
        while(node) {
            if(node.key === key) {
                node.value = value;
                return;
            }
            node = node.next;
        }
        this.append(key, value);
        return true;
    }
    get(key) {
        let node = this.head;
        while(node) {
            if(node.key === key) {
                return node.value;
            }
            node = node.next;
        }
    }
    contains(key) {
        let node = this.head;
        while(node) {
            if(key === node.key) return true;
            node = node.next;
        }
        return false;
    }
    remove(key) {
        if (this.head && this.head.key === key) {
            this.head = this.head.next;
            this.length--;
            return true;
        }
        
        let node = this.head;
        while(node) {
            if(node.next != null && node.next.key === key) {
                node.next = node.next.next;
                this.length--;
                return true
            }
            node = node.next;
        }
        return false;
    }
    size() {
        return this.length;
    }
    getKeys() {
        let node = this.head;
        let arr = [];
        while(node) {
            arr.push(node.key)
            node = node.next;
        }
        return arr;
    }
    getValues() {
        let node = this.head;
        let arr = [];
        while(node) {
            arr.push(node.value)
            node = node.next;
        }
        return arr;   
    }
    getEntries() {
        let node = this.head;
        let arr = [];
        while(node) {
            arr.push([node.key, node.value]);
            node = node.next;
        }
        return arr;
    }
}