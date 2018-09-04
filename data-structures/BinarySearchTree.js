// Searches run in O(log n) time
// Downsides- no random access, tree can get unbalanced

// Clarification question - is it a binary tree or binary search tree?

// Create a node class used to implement a BST
class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data) {
		if (data <= this.data && this.left) {
			this.left.insert(data);
		} else if (data <= this.data) {
			this.left = new Node(data);
		} else if (data > this.data && this.right) {
			this.right.insert(data);
		} else if (data > this.data) {
			this.right = new Node(data);
		}
	}

	contains(data) {
		// Base case
		if (data === this.data) {
			return this;
		}

		if (data < this.data && this.left) {
			return this.left.contains(data);
		} else if (data > this.data && this.right) {
			return this.right.contains(data);
		}

		return null;
	}
}
// ---------------------------------- //
// BST class with the ability to serial and deserialize
class BST {
	constructor() {
		this.root = null;
	}

	// Convert tree to string using BST
	serialize() {
		if (!this.root) {
			return '';
		}
		const results = [];
		const nodeQueue = [this.root];
		while (nodeQueue.length) {
			const current = nodeQueue.shift();
			if (current) {
				results.push(current.data);
				nodeQueue.push(current.left || null);
				nodeQueue.push(current.right || null);
			} else {
				// null marker
				results.push('null');
			}
		}

		// Strip off the last leaf null nodes
		while (results[results.length - 1] === 'null') {
			results.pop();
		}

		// return final string
		return JSON.stringify(results);
	}

	deserialize(str) {
		const arr = JSON.parse(str);
		if (!arr.length) {
			return null;
		}
		const tree = new BST();
		const rootNode = new Node(arr.shift());
		tree.root = rootNode;

		const queue = [rootNode];
		while (queue.length) {
			const currentNode = queue.shift();
			const left = arr.shift();
			const right = arr.shift();

			if (left !== null) {
				currentNode.left = new Node(left);
				queue.push(currentNode.left);
			}

			if (right !== null) {
				currentNode.right = new Node(right);
				queue.push(currentNode.right);
			}
		}

		return tree;
	}
}
// ---------------------------------- //
// Validate a BST
function validate(node, min = null, max = null) {
	// Base Case #1
	if (max !== null && node.data > max) {
		return false;
	}
	// Base Case #2
	if (min !== null && node.data < min) {
		return false;
	}

	// Move to the left, so set a new max value
	if (node.left && !validate(node.left, min, node.data)) {
		return false;
	}

	// Move to the right, so set a new min value
	if (node.right && !validate(node.right, node.data, max)) {
		return false;
	}

	return true;
}

// ---------------------------------- //
// Binary Search on a sorted array - iterative
function binarySearch(arr, item) {
	let low = 0;
	let high = arr.length - 1;
	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		const guess = arr[mid];
		if (item === guess) {
			return mid;
		}
		if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	// Nothing found
	return null;
}

// Binary Search on a sorted array - recursive
function binarySearchRecursive(arr, left, right, item) {
	if (right >= left) {
		const mid = Math.floor((left + right - 1) / 2);
		if (arr[mid] === item) {
			return mid;
		}

		if (item < arr[mid]) {
			return binarySearchRecursive(arr, left, mid - 1, item);
		} else {
			return binarySearchRecursive(arr, mid + 1, right, item);
		}
	}

	// Not found
	return -1;
}
const list = [1, 3, 5, 12, 24, 25, 26, 32];
const result = binarySearchRecursive(list, 0, list.length - 1, 26);
