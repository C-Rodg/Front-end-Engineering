// Insertion - O(1), Removal - O(1), Searching - O(n), Access - O(n)
// Removal is quicker than single linked lists because it can easily remove from end

// More flexible than Singly Linked List
// Uses more memory for 'prev' pointer though

// TIP: Always write and leverage the getAt(index) method first

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	add(data) {
		const newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length += 1;
		return this;
	}

	removeLast() {
		// If length = 0
		if (!this.head) {
			return null;
		}

		// If length = 1
		if (this.head === this.tail) {
			const itemToReturn = this.head;
			this.head = null;
			this.tail = null;
			this.length = 0;
			return itemToReturn;
		}

		const oldTail = this.tail;
		this.tail = oldTail.prev;
		this.tail.next = null;
		oldTail.prev = null;
		this.length -= 1;
		return oldTail;
	}

	// remove node from beginning
	shift() {
		// If length = 0
		if (!this.head) {
			return null;
		}

		let oldHead = this.head;
		// If length = 1
		if (oldHead === this.tail) {
			this.head = null;
			this.tail = null;
			this.length -= 1;
			return oldHead;
		}

		let newHead = this.head.next;
		this.head = newHead;
		newHead.prev = null;
		oldHead.next = null;
		this.length -= 1;
		return oldHead;
	}

	// add nodes to beginning
	unshift(data) {
		const newNode = new Node(data);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			this.length += 1;
			return this;
		}

		let oldHead = this.head;
		oldHead.prev = newNode;
		newNode.next = oldHead;
		this.head = newNode;
		this.length += 1;
		return this;
	}

	getAt(idx) {
		if (idx < 0 || !this.head || idx > this.length - 1) {
			return null;
		}
		const startAtBeginning = idx <= (this.length - 1) / 2 ? true : false;
		let nodeToFind = this.head;

		// Decide whether to start at beginning or end of list
		if (startAtBeginning) {
			let counter = 0;
			while (counter !== idx) {
				nodeToFind = nodeToFind.next;
				counter += 1;
			}
		} else {
			let counter = this.length - 1;
			while (counter !== idx) {
				nodeToFind = nodeToFind.prev;
				counter -= 1;
			}
		}
		return nodeToFind;
	}

	set(idx, val) {
		const nodeToEdit = this.getAt(idx);
		if (!nodeToEdit) {
			return false;
		}
		nodeToEdit.data = val;
		return true;
	}

	insert(idx, data) {
		if (idx === 0) {
			this.unshift(data);
		} else if (idx === this.length) {
			this.add(data);
		} else {
			const prevNode = this.getAt(idx - 1);
			if (!prevNode) {
				return false;
			}

			const newNode = new Node(data);
			const nextNode = prevNode.next;
			prevNode.next = newNode;
			newNode.prev = prevNode;
			nextNode.prev = newNode;
			newNode.next = nextNode;
			this.length += 1;
		}
		return true;
	}

	removeAt(idx) {
		if (idx === 0) {
			return this.shift();
		} else if (idx === this.length - 1) {
			return this.removeLast();
		} else {
			const prevNode = this.getAt(idx - 1);
			if (!prevNode) {
				return false;
			}
			const nodeToRemove = prevNode.next;
			const nextNode = nodeToRemove.next;
			prevNode.next = nextNode;
			nextNode.prev = prevNode;
			nodeToRemove.prev = null;
			nodeToRemove.next = null;
			this.length -= 1;
			return nodeToRemove;
		}
	}
}

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}
