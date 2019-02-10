// Linked Lists: search/access - O(n); insertion - O(1); deletion - O(N -- when at end)
// Array & Dyanmic Arrays: search/access - O(1); insertion - O(n); deletion - O(n); append O(1)

// LL's are better at inserts than arrays because
// doesn't require 'n' amount of slots all next
// to eachother and no 'shifting' required.
// Downside is access to elements is slower.

// TIP: Always write and leverage the getAt(index) method first

class SinglyLinkedList {
	constructor() {
		this.head = null;
	}

	getAt(n) {
		let current = this.head;
		let counter = 0;
		while (current) {
			if (counter === n) {
				return current;
			}
			current = current.next;
			counter++;
		}
		return null;
	}

	insertAt(data, n) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}

		if (n === 0) {
			const oldHead = this.head;
			this.head = new Node(data);
			this.head.next = oldHead;
			return;
		}

		let current = this.head;
		let previous = null;
		let counter = 0;

		while (current) {
			if (counter === n - 1) {
				previous = current;
				break;
			}
			if (current.next) {
				previous = current.next;
			}
			counter += 1;
			current = current.next;
		}

		if (!previous.next) {
			previous.next = new Node(data);
			return;
		} else {
			const tail = previous.next.next;
			previous.next = new Node(data);
			previous.next.next = tail;
			return;
		}
	}

	removeAt(n) {
		if (!this.head) {
			return null;
		}

		if (n === 0) {
			const oldHead = this.head;
			this.head = this.head.next;
			return oldHead;
		}

		let counter = 0;
		let current = this.head;
		let previous = null;

		while (current) {
			if (counter === n - 1) {
				previous = current;
				break;
			}

			counter++;
			current = current.next;
		}

		if (previous && previous.next) {
			const itemToRemove = previous.next;
			previous.next = previous.next.next;
			return itemToRemove;
		}
		return null;
	}

	*[Symbol.iterator]() {
		let current = this.head;
		while (current) {
			yield current;
			current = current.next;
		}
	}
}

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

// ---------- Utility Functions --------------- //
// Get midpoint of a list:  O(n)
function getMidpoint(list) {
	if (!list.head) {
		return null;
	}

	let slow = list.head;
	let fast = list.head;

	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
}

// Get 'nth' from last element in a linked list: O(n)
function getNFromLast(n, list) {
	if (!list.head) {
		return null;
	}

	let slow = list.head;
	let fast = list.head;

	while (n > 0) {
		fast = fast.next;
		n--;
	}

	while (fast.next) {
		fast = fast.next;
		slow = slow.next;
	}

	return slow;
}

// Detect if a linked list is circular: O(n)?
function isListCircular(list) {
	if (!list.head) {
		return false;
	}

	let slow = list.head;
	let fast = list.head;

	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) {
			return true;
		}
	}
	return false;
}

// ------- LINKED LIST WITH TAIL & LENGTH ----- //
class SinglyLinkedListWithTail {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// Add value to last position of LL
	add(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length += 1;
	}

	// Remove last item of LL
	removeLast() {
		if (!this.head) {
			return null;
		}

		let current = this.head;
		let newTail = this.head;

		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length -= 1;
		// Check for removal with only one item
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	// Remove head from LL
	shift() {
		if (!this.head) {
			return null;
		}
		const oldHead = this.head;
		this.head = oldHead.next;
		this.length -= 1;
		if (this.length === 0) {
			this.tail = null;
		}
		return oldHead;
	}

	// Add value to front of LL
	unshift(val) {
		const newHead = new Node(val);
		if (!this.head) {
			this.head = newHead;
			this.tail = newHead;
			this.length += 1;
			return this;
		}
		const oldHead = this.head;
		this.head = newHead;
		this.head.next = oldHead;
		this.length += 1;
		return this;
	}

	// Get node at index
	getAt(idx) {
		// Edge cases
		if (idx < 0 || !this.head || idx > this.length - 1) {
			return null;
		}
		let counter = 0;
		let current = this.head;
		while (counter !== idx) {
			current = current.next;
			counter += 1;
		}
		return current;
	}

	// Set data for node at index
	setAt(idx, data) {
		const changedNode = this.getAt(idx);
		if (!changedNode) {
			return false;
		}
		changedNode.data = data;
		return true;
	}

	insertAt(idx, data) {
		if (idx > this.length || idx < 0) {
			return false;
		}
		if (idx === this.length) {
			this.add(data);
		} else if (idx === 0) {
			this.unshift(data);
		} else {
			const previousNode = this.getAt(idx - 1);
			const tail = previousNode.next;
			const newNode = new Node(data);
			previousNode.next = newNode;
			newNode.next = tail;
			this.length += 1;
		}

		return true;
	}

	removeAt(idx) {
		if (idx < 0 || !this.head || idx > this.length - 1) {
			return null;
		}
		if (idx === this.length - 1) {
			return this.removeLast();
		} else {
			const prev = this.getAt(idx - 1);
			const nodeToRemove = prev.next;
			prev.next = prev.next.next;
			this.length -= 1;
			return nodeToRemove;
		}
	}

	// Reverse LL in place
	reverseInPlace() {
		let node = this.head;

		// Swap head and tail
		this.head = this.tail;
		this.tail = node;

		// Get references before and after nodes
		let prev = null;
		let next;
		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}

	reverseNoTail() {
		let curr = this.head;
		let prev = null,
			next = null;
		while (curr) {
			next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}
		// Reassign the head
		this.head = prev;
	}
}
