function findSumOfThree(arr, sum) {
	// Sort it
	arr = arr.sort((a, b) => a - b);

	// Loop through and fix one index each time
	for (let i = 0; i < arr.length; i++) {
		const remainingValue = sum - arr[i];

		// Try to find sum of two
		if (findSumOfTwo(arr, i + 1, remainingValue)) {
			return true;
		}
	}
	return false;
}

function findSumOfTwo(arr, start, sum) {
	const hash = {};

	for (let i = start; i < arr.length; i++) {
		const remaining = sum - arr[i];
		if (hash[remaining]) {
			return true;
		}
		hash[arr[i]] = true;
	}
	return false;
}
