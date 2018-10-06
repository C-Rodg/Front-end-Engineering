// Runtime: O (n log n)
function numberPairs(arr, k) {
	// Sort using merge or heap sort
	const sortedArray = mergeSort(arr);

	// Determine trackers
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		const sum = arr[left] + arr[right];
		if (sum === k) {
			return true;
		} else if (sum < k) {
			left += 1;
		} else {
			right -= 1;
		}
	}
	return false;
}

// Runtime: O(n)
function numberPairsHash(arr, k) {
	const pairMap = {};
	for (let i = 0; i < arr.length; i++) {
		const pair = k - arr[i];
		if (pair >= 0 && pairMap[pair] === 1) {
			return true;
		}
		pairMap[arr[i]] = 1;
	}
	return false;
}

// HELPER - Merge sort
function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const results = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}
	return results;
}
