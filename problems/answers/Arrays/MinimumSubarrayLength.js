function minimumSubarrayLength(arr, k) {
	// Window edges
	let left = 0;
	let right = 0;

	// Sum tracking
	let currentSum = 0;
	let result = Number.MAX_SAFE_INTEGER;

	// Loop through the array
	while (right < arr.length) {
		currentSum += arr[right];

		// current sum is big enough, get window size and attempt to shrink
		while (currentSum >= k) {
			// Check if this window is smaller than our current smallest
			result = Math.min(result, right - left + 1);

			// Shrink the window, so subtract the value moving out of the window
			currentSum -= arr[left];
			left++;
		}

		// Increment
		right += 1;
	}

	// Return 0 if sum k was never hit
	return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}
