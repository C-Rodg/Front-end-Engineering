// Searches run in O(log n) time

// TODO TREE STRUCTURE

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
