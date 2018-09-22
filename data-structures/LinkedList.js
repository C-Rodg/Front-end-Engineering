// Array: reading - O(1); insertion - O(n); deletion - O(n)
// Lists: reading - O(n); insertion - O(1); deletion - O(1)

// LL's are better at inserts than arrays because
// doesn't require 'n' amount of slots all next
// to eachother.
// Downside is access to elements is slower.
class LinkedList {
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
class LinkedListWithTail {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

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
}
