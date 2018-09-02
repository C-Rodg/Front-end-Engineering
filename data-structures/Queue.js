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
	constructor() {
		this.data = new Stack();
	}

	add(item) {
		this.data.add(item);
	}

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
}
