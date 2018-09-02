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
