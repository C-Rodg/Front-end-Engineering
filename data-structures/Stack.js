// Stack
// LIFO - Last in, first out
// used in Depth-first searches (DFS)

class Stack {
	constructor() {
		this.data = [];
	}

	add(item) {
		this.data.push(item);
	}

	remove() {
		return this.data.pop();
	}

	peek() {
		return this.data[this.data.length - 1];
	}
}

// Insertion/Removal O(1)
// Searching/Access O(n)
class StackOptimized {
	// Uses a linked list and adds/removes from start
	// for O(1) time
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		const newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			const oldFirst = this.first;
			newNode.next = oldFirst;
			this.first = newNode;
		}
		return ++this.size;
	}

	pop() {
		if (!this.first) {
			return null;
		}

		const itemToRemove = this.first;
		// Handle length = 1
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size -= 1;
		return itemToRemove.data;
	}
}
