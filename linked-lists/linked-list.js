import Node from "./node.js"
export default class LinkedList {
    constructor() {
        this.head = null;
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
            return true;
        }
        
        let node = this.head;
        while(node) {
            if(node.next != null && node.next.key === key) {
                node.next = node.next.next;
                return true
            }
            node = node.next;
        }
        return false;
    }
    size() {
        let node = this.head;
        let size = 0;

        while(node) {
            size++;
            node = node.next;
        }
        return size;
    }
}