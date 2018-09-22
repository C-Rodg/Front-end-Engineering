// Runtime: O(n * log n)
// can potentially get to O(n^2) if already sorted though-that is why it's best to use random pivot

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

// Random pivot quicksort (more effecient on average)
function quickSortRandomPivot(arr) {
	// Base case
	if (arr.length < 2) {
		return arr;
	}
	const pivotIndex = Math.floor(Math.random() * arr.length);
	const pivot = arr[pivotIndex];
	const left = [];
	const right = [];
	for (let i = 0; i < arr.length; i++) {
		if (i === pivotIndex) {
			continue;
		}
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return [...quickSortRandomPivot(left), pivot, ...quickSortRandomPivot(right)];
}

// ---------- IN PLACE QUICK SORT -------- //

// This function chooses a pivot and then
// splits the array in place between left of pivot
// and right of pivot.  Returns the pivot index.

// Space complexity here: O(log n)

function pivotHelper(arr, startIdx = 0, endIdx = arr.length - 1) {
	let pivotValue = arr[startIdx];
	let swapIdx = 0;
	for (let i = startIdx + 1; i < arr.length; i++) {
		if (arr[i] < pivotValue) {
			swapIdx += 1;
			//[arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
			const lesser = arr[i];
			arr[i] = arr[swapIdx];
			arr[swapIdx] = lesser;
		}
	}

	const lesser = arr[swapIdx];
	arr[swapIdx] = arr[startIdx];
	arr[startIdx] = lesser;
	return swapIdx;
}

function quickSortInPlace(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIdx = pivotHelper(arr, left, right);
		quickSortInPlace(arr, left, pivotIdx - 1);
		quickSortInPlace(arr, pivotIdx + 1, right);
	}
	return arr;
}
