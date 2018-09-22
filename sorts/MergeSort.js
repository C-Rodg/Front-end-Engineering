// Runtime: O(n * log n)
// O(log n) = splitting of array, O(n) comparisons per split

// Space complexity: O(n)

// **RECURSIVE** //

// Summary - split arrays to 1 with recursion, then merge sorted arrays
function mergeSort(arr) {
	// Base case
	if (arr.length < 2) {
		return arr;
	}

	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);
	return merge(mergeSort(left), mergeSort(right));
}

// Helper to merge two sorted arrays
function merge(left, right) {
	const results = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}
	results.push(...left, ...right);
	return results;
}

// Split arrays until size 1 with recursion
// then merge sorted arrays together until final result
// When needing a sort, this is a good one to grab.
