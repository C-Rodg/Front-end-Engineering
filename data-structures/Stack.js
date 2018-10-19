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

class StackUsingQueues {
	// A good question to ask the interview is what needs
	// to be faster - adding or removing
	constructor() {
		this.q1 = [];
		this.q2 = [];
	}

	// O(1)
	push(data) {
		this.q1.push(data);
	}

	isEmpty() {
		return this.q1.length === 0;
	}

	// O(n)
	pop() {
		while (this.q1.length > 1) {
			this.q2.push(this.q1.shift());
		}
		const lastItem = this.q1.shift();
		this.q1 = q2;
		this.q2 = [];

		return lastItem;
	}

	// O(n)
	slowPush(data) {
		if (this.q1.length === 0) {
			this.q1.push(data);
		} else {
			this.q2.push(data);
			while (this.q1.length) {
				this.q2.push(this.q1.shift());
			}
			this.swapQueues();
		}
	}

	// O(1)
	fastPop() {
		if (this.q1.length + this.q2.length === 0) {
			throw new Error('No elements');
		}

		return this.q1.shift();
	}

	// Helper
	swapQueues() {
		let temp = this.q1;
		this.q1 = this.q2;
		this.q2 = temp;
	}
}
