// Heap
// Similar to a BST, but instead of guaranteeing order
// from left to right, it guarantees it from top to bottom
// - Best for finding min or max values
// - Often stored in a compact array
// - order doesn't matter on same level

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
