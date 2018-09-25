// Heap
// Similar to a BST, but instead of guaranteeing order
// from left to right, it guarantees it from top to bottom
// - Best for finding min or max values
// - Often stored in a compact array
// - order doesn't matter on same level
// - values stored in left child first, and are always compact (2 children before next level)
// NOTE: if 19 & 36 are at same level, 36 could have a child higher than 19 (say 25) and it would still be valid.  19's children must be lower than it though
// meaning CHILD is smaller than PARENT (doesn't have to be parent's sibling)

// Used implement priority queues
// Commonly used for graph traversal algorithms

// Max Heap - higher numbers on top
// Min Heap - lower numbers on top

// left child: i * 2
// right child: i * 2 + 1
// parent: Math.floor(i / 2)

// Compact Array Structure:
// index 1 = root, index 2 = left root node, index 3 = right root node
// 4 left left node, 5 left right node, 6 right left node, 7 right right node

class MinHeap {
	constructor() {
		this.heap = [null]; // null index 0 for easier math
	}

	insert(num) {
		const heap = this.heap;
		heap.push(num);
		if (heap.length > 2) {
			const idx = heap.length - 1;
			while (heap[idx] < heap[Math.floor(idx / 2)]) {
				if (idx >= 1) {
					// Swap element with it's parent
					[heap[Math.floor(idx / 2)], heap[idx]] = [
						heap[idx],
						heap[Math.floor(idx / 2)]
					];
					if (Math.floor(idx / 2) > 1) {
						idx = Math.floor(idx / 2);
					} else {
						break;
					}
				}
			}
		}
	}

	// Remove the smallest node
	remove() {
		const heap = this.heap;
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length === 3) {
				if (heap[1] > heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				}
				return smallest;
			}
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
				if (heap[left] < heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i;
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				}
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] === undefined || heap[right] === undefined) {
					break;
				}
			}
		} else if (heap.length === 2) {
			heap.splice(1, 1);
		} else {
			return null;
		}
		return smallest;
	}

	sort() {
		const result = [];
		const heap = this.heap;
		while (heap.length > 1) {
			result.push(this.remove());
		}
		return result;
	}
}

class MaxHeap {
	constructor() {
		this.heap = [null];
	}

	insert(num) {
		const heap = this.heap;
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			// While current node is greater than parent node
			while (heap[idx] > heap[Math.floor(idx / 2)]) {
				if (idx >= 1) {
					[heap[Math.floor(idx / 2)], heap[idx]] = [
						heap[idx],
						heap[Math.floor(idx / 2)]
					];
					if (Math.floor(idx / 2) > 1) {
						idx = Math.floor(idx / 2);
					} else {
						break;
					}
				}
			}
		}
	}

	remove() {
		const heap = this.heap;
		const greatestValue = heap[1]; // Greatest number
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length === 3) {
				if (heap[1] < heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				}
				return greatestValue;
			}
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
				if (heap[left] > heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i;
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				}
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] === undefined || heap[right] === undefined) {
					break;
				}
			}
		} else if (heap.length === 2) {
			heap.splice(1, 1);
		} else {
			return null;
		}
		return greatestValue;
	}
}

class MaxBinaryHeap {
	constructor() {
		this.data = [];
		// If not using [0] = null then use these formulas:
		// i's parent = Math.floor(i-1 /2)
		// i's left child = 2i + 1
		// i's right child = 2i + 2
	}

	// Insert at end and bubble up
	insert(data) {
		// 1.) Add to data array
		// 2.) Compare to parent and swap if needed
		// 3.) Compare to next parent and swap if needed
		this.data.push(data);

		let idx = this.data.length - 1;
		let parentIdx = Math.floor((idx - 1) / 2);
		while (this.data[idx] > this.data[parentIdx] && idx > 0) {
			// Swap
			[this.data[idx], this.data[parentIdx]] = [
				this.data[parentIdx],
				this.data[idx]
			];
			idx = parentIdx;
			parentIdx = Math.floor((idx - 1) / 2);
		}
	}

	// Extract max
	extractMax() {
		// 1.) Remove index 0 and replace with item at end [arr.length -1]
		// 2.) Compare new root to children and swap with largest if needed
		// 3.) repeat...

		// Swap and save off variables
		const max = this.data[0];
		const current = this.data.pop();
		this.data[0] = current;

		// Edge case of only one item
		if (this.data.length === 1) {
			return this.data.pop();
		}

		// Sink down to proper position
		let idx = 0;
		const length = this.data.length;
		while (true) {
			const element = this.data[idx];
			const leftChildIdx = 2 * idx + 1;
			const rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.data[leftChildIdx];
				if (leftChild > element) {
					swap = leftChildIdx;
				}
			}

			if (rightChildIdx < length) {
				rightChild = this.data[rightChildIdx];
				if (rightChild > element && rightChild > leftChild) {
					swap = rightChildIdx;
				}
			}

			if (swap === null) {
				break;
			}

			// Swap values
			this.data[idx] = this.data[swap];
			this.data[swap] = element;

			idx = swap;
		}

		return max;
	}
}
