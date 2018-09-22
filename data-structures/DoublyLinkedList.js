// More flexible than Singly Linked List
// Uses more memory for 'prev' pointer though

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
}

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}
