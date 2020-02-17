function longestIncreasingSubsequence(arr) {
	// We create our dynamic programming array
	// and initialize it with 1's because
	// if you were to start and end at the index,
	// the longest subsequence would be 1.
	const longest = Array(arr.length).fill(1);

	// For every index starting at 1,
	// loop from 0 index -> i and calculate
	for (let i = 1; i < arr.length; i++) {
		for (let j = 0; j < i; j++) {
			// Check to make sure we are increasing
			if (arr[i] > arr[j]) {
				// We are increasing, so make our decision
				longest[i] = Math.max(longest[i], longest[j] + 1);
			}
		}
	}

	// Loop over our longest array and find the max
	let max = 0;
	for (let width of longest) {
		max = Math.max(width, max);
	}

	return max;
}

// Tip: You can use another array for tracking what indexes you are choosing in your subsequence.
