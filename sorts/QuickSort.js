// Runtime: O(n * log n)
// can potentially get to O(n^2) if already sorted though : (

// Summary - find pivot, create arrays for left and right of it
// then call recursively on those while placing pivot in between them

// **RECURSIVE** //

function quickSort(arr) {
	// Base case
	if (arr.length < 2) {
		return arr;
	}

	const pivot = arr[arr.length - 1];
	const left = [];
	const right = [];
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
}

// Choose pivot and split into left and right recursively
// last element is often chosen as pivot, but better option might be
// comparing [0], [mid], [arr.length -1] indexes to find middle value which leads to better performance
