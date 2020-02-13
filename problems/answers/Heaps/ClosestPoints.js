function closestPoints(points, k) {
	// Get the hypotenus for each set of points
	const distances = points.map(p => new Point(p[0], p[1]));

	// we could just sort them by distance, but another solution is to create a heap data structure

	// Add all items to heap
	const minHeap = new MinPointsHeap();
	for (let d of distances) {
		minHeap.add(d);
	}

	// Extract the k minimum
	const results = [];
	while (k > 0) {
		results.push(minHeap.extractMin());
		k--;
	}

	return results;
}

// Shape of a point object
function Point(x, y) {
	this.x = x;
	this.y = y;
	this.distance = Math.sqrt(x * x + y * y);
}

class MinPointsHeap {
	constructor() {
		this.data = [];
	}

	// CALCULATIONS:
	// Parent: Math.floor((i-1)/2)
	// Left Child: 2i + 1
	// Right Child: 2i + 2

	add(val) {
		// Add it to the end
		this.data.push(val);

		// All done if only one item
		if (this.data.length === 1) {
			return;
		}

		let currIdx = this.data.length - 1;
		let parentIdx = Math.floor((currIdx - 1) / 2);
		// Swap items while current index is less than the parent index
		while (
			this.data[currIdx].distance < this.data[parentIdx].distance &&
			currIdx > 0
		) {
			// Swap
			swap(this.data, curr, parentIdx);

			// Calculate new indexes
			currIdx = parentIdx;
			parentIdx = Math.floor((currIdx - 1) / 2);
		}
	}

	extractMin() {
		// Swap the beginning and end elements
		swap(this.data, 0, this.data.length - 1);

		// Save a reference to the minimum (which was at the top of the heap)
		const result = this.data.pop();

		// Edge cases
		if (this.data.length <= 1) {
			return result;
		}

		// Fix the heap
		let idx = 0;
		let heapSize = this.data.length;
		while (true) {
			let leftIdx = 2 * idx + 1;
			let rightIdx = 2 * idx + 2;
			let swap = idx;

			// Check if left child is smaller
			if (
				leftIdx < heapSize &&
				this.data[leftIdx].distance < this.data[swap].distance
			) {
				swap = leftIdx;
			}

			// Check if right child is smaller
			if (
				rightIdx < heapSize &&
				this.data[rightIdx].distance < this.data[swap].distance
			) {
				swap = rightIdx;
			}

			// If swap still equals idx, then no swap is needed, so we are done.
			if (swap === idx) {
				break;
			}

			// Swap the values
			swap(this.data, idx, swap);

			// Set the next index to the swapped value
			idx = swap;
		}

		// Return saved result
		return result;
	}
}
