// This solution follows a few steps:
// 1.) Create a priority queue
// 2.) Add each of the sorted lists to it (would be ordered by the first value)
// 3.) While the priority queue still has items to process, remove the minimum
// 4.) If the minimum has another item in it's list, add it back to the PQ
// 5.) If this is the first element in our new list, assign the head to the min and the last element we worked with to the min
// 6.) If this is not the first element, set the last element we worked with next property to min.  Then set our last element we worked with to the new min.
function mergeKSortedLinkedLists(lists) {
	// Create the priority queue and
	// add the first item from each list
	const pq = new MinHeap();
	for (let list of lists) {
		pq.addVal(list);
	}

	let head = null;
	let curr = null;
	// Continue until the priority queue no longer has values
	while (pq.hasValues()) {
		// Get the next minimum
		const min = pq.removeMin();

		// If it has a next value, add it to the priority queue
		if (min.next) {
			pk.addVal(min.next);
		}

		if (!head) {
			// First element in our new list,
			// so add it and assign the last node we're working with
			head = min;
			curr = min;
		} else {
			// We already have a portion of the list built,
			// so assign the next property to the next minimum
			// and then reassign curr as the last node we've worked with.
			curr.next = min;
			curr = curr.next;
		}
	}

	return head;
}

class MinHeap {
	constructor() {
		this.data = [];
	}

	addVal(val) {
		// Add it to the end of our array
		this.data.push(val);

		// First element
		if (this.data.length === 1) {
			return;
		}

		let idx = this.data[this.data.length - 1];
		let parentIdx = Math.floor((idx - 1) / 2);

		while (
			parentIdx >= 0 &&
			idx > 0 &&
			this.data[parentIdx].val > this.data[idx].val
		) {
			swap(this.data, idx, parentIdx);
			idx = parentIdx;
			parentIdx = Math.floor((idx - 1) / 2);
		}
	}

	removeMin() {
		// Check for only one element
		if (this.data.length === 1) {
			return this.data.pop();
		}

		// Swap the first and last values
		swap(this.data, 0, this.data.length - 1);

		// Get a reference to the minimum (now at the end)
		const minimum = this.data.pop();

		let idx = 0;
		let heapSize = this.data.length;
		while (true) {
			let swapIdx = idx;
			let leftChild = 2 * idx + 1;
			let rightChild = 2 * idx + 2;

			if (
				leftChild < heapSize &&
				this.data[leftChild].val < this.data[swapIdx].val
			) {
				swapIdx = leftChild;
			}

			if (
				rightChild < heapSize &&
				this.data[rightChild].val < this.data[swapIdx].val
			) {
				swapIdx = rightChild;
			}

			if (swapIdx === idx) {
				break;
			}

			// Swap the values
			swap(this.data, idx, swapIdx);

			// Reassign the idx to check
			idx = swapIdx;
		}

		// Return the minimum
		return minimum;
	}

	// Helper to see if there are items to dequeue
	hasValues() {
		return this.data.length > 0;
	}
}

// Helper for swapping elements in an array
function swap(arr, i, j) {
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
