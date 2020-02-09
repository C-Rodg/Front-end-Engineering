function findKSumSubsets(arr, k) {
	const results = [];

	// Recursive function - we are basically looping through
	// the 'arr' array and attempt to choose the element at 'i' or
	// not choose the element at 'i'.
	function sumHelper(idx, currentSum, currentSubset) {
		// Base case
		if (currentSum === k) {
			// add to results
			results.push([...currentSubset]);
			return;
		} else if (currentSum > k || idx >= arr.length) {
			// We're either over 'k' or done with the array
			return;
		}

		// Choose the element at idx and continue
		currentSum += arr[idx];
		currentSubset.push(arr[idx]);
		sumHelper(idx + 1, currentSum, currentSubset);

		// Do not choose the element at idx and continue
		currentSum -= arr[idx];
		currentSubset.pop();
		sumHelper(idx + 1, currentSum, currentSubset);
	}

	// Start at 0 index, with 0 sum and nothing in your set
	sumHelper(0, 0, []);

	return results;
}
