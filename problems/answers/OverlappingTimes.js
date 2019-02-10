// Simple approach: O(n^2)
// Take first interval and compare
// it with all other intervals for overlapping.
// If it overlaps, then remove the other interval
// from the list, merge it, and continue comparisons

// Better approach: O (n log n)
// Sort intervals by start time.
// If interval 'i' doesn't overlap with interval 'i-1'
// then interval 'i+1' doesn't overlap with 'i-1'.

function mergeTimes(arr) {
	// Do sorting of times by start time- log n
	const sortedTimes = quickSort(arr);

	const results = [sortedTimes[0]];
	for (let i = 1; i < sortedTimes.length; i++) {
		// Get last item from the stack of merged times
		const mergedInterval = results[results.length - 1];
		const currentInterval = sortedTimes[i];
		if (mergedInterval.end < currentInterval.start) {
			results.push(currentInterval);
		} else if (mergedInterval.end < currentInterval.end) {
			mergedInterval.end = currentInterval.end;
		}
	}
	return results;
}

// BONUS ANSWER - sort like normal, create a min heap tracking earliest end times,
// loop over sorted meetings and check if current start time is later than earliest end -
// if current start time is >= earliest end we no longer need an extra room, so pop one
// after check add current end time to min heap
function getMeetingRoomsNeeded(arr) {
	// Sort by start time
	const sortedMeetings = quickSort(arr);

	const pq = new MinHeap();
	pq.add(sortedMeetings[i].end);

	for (let i = 1; i < sortedMeetings.length; i++) {
		const curr = sortedMeetings[i];
		if (curr.start >= pq.peek()) {
			pq.remove();
		}
		pq.add(curr.end);
	}

	// the heap size will be the max rooms needed
	return pq.size();
}

class MinHeap {
	constructor() {
		this.data = [];
	}

	add(val) {
		this.data.push(val);
		let idx = this.data.length - 1;
		let parentIdx = Math.floor((idx - 1) / 2);
		while (this.data[idx] < this.data[parentIdx] && idx > 0) {
			let temp = this.data[parentIdx];
			this.data[parentIdx] = this.data[idx];
			this.data[idx] = temp;
			idx = parentIdx;
			parentIdx = Math.floor((idx - 1) / 2);
		}
	}

	remove() {
		const min = this.data[0];
		const current = this.data.pop();
		this.data[0] = current;

		if (this.data.length === 1) {
			return this.data.pop();
		}

		let idx = 0;
		const len = this.data.length;
		while (true) {
			const element = this.data[idx];
			const leftChildIdx = idx * 2 + 1;
			const rightChildIdx = idx * 2 + 2;
			let swap = null;
			let leftChild, rightChild;

			if (leftChildIdx < len) {
				leftChild = this.data[leftChildIdx];
				if (leftChild < element) {
					swap = leftChildIdx;
				}
			}

			if (rightChildIdx < len) {
				rightChild = this.data[rightChildIdx];
				if (rightChild < element && rightChild < leftChild) {
					swap = rightChildIdx;
				}
			}

			if (swap === null) {
				break;
			}

			this.data[idx] = this.data[swap];
			this.data[swap] = element;

			idx = swap;
		}

		return max;
	}

	peek() {
		return this.data[0];
	}

	size() {
		return this.data.length;
	}
}
