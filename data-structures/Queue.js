// Queue
// FIFO - First in, First out
// Used in breadth-first searches (BFS)

class Queue {
	constructor() {
		this.data = [];
	}

	add(item) {
		this.data.unshift(item);
	}

	remove() {
		return this.data.pop();
	}

	peek() {
		return this.data[this.data.length - 1];
	}
}

// Function for combining two queues
function weave(q1, q2) {
	const result = new Queue();
	while (q1.peek() || q2.peek()) {
		if (q1.peek()) {
			result.add(q1.remove());
		}
		if (q2.peek()) {
			result.add(q2.remove());
		}
	}
	return result;
}

// Implementation with two stacks only
class QueueWithStacks {
	// A good question to ask the interview is what needs
	// to be faster - adding or removing
	constructor() {
		this.data = new Stack();
	}

	// O(1)
	add(item) {
		this.data.add(item);
	}

	// O(n)
	remove() {
		const tempStack = new Stack();
		// Shift all items to temporary stack
		while (this.data.peek()) {
			tempStack.add(this.data.remove());
		}
		// Extract item to remove
		const itemToRemove = tempStack.remove();

		// Shift all items back to original stack
		while (tempStack.peek()) {
			this.data.add(tempStack.remove());
		}

		return itemToRemove;
	}

	// O (n)
	peek() {
		const tempStack = new Stack();

		while (this.data.peek()) {
			tempStack.add(this.data.remove());
		}

		const itemToReturn = tempStack.peek();

		while (tempStack.peek()) {
			this.data.add(tempStack.remove());
		}

		return itemToReturn;
	}

	// O(n)
	slowEnqueue(data) {
		while (this.s1.length) {
			this.s2.push(this.s1.pop());
		}
		this.s1.push(data);
		while (this.s2.length) {
			this.s1.push(this.s2.pop());
		}
	}

	// O(1)
	fastDequeue() {
		return this.s1.pop();
	}
}

// Insertion / Removal O(1)
// Search / Access O(n)
class QueueOptimized {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(data) {
		const newNode = new Node(data);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			const oldLast = this.last;
			oldLast.next = newNode;
			this.last = newNode;
		}

		return ++this.size;
	}

	dequeue() {
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
		return itemToRemove;
	}
}
