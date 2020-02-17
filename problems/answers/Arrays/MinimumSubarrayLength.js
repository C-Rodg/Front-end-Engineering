function minimumSubarrayLength(arr, k) {
	// Window edges
	let left = 0;
	let right = 0;

	// Sum tracking
	let currentSum = 0;
	let result = Number.MAX_SAFE_INTEGER;

	// Loop through the array
	while (right < arr.length) {
		// Increase the size of the array
		while (currentSum <= k && right < arr.length) {
			currentSum += arr[right];
			right++;
		}

		// Decrease the size of the array and check if we have a new min
		while (currentSum > k && left < arr.length) {
			// Compare the size of the array
			result = Math.min(result, right - left);

			// Shrink the array
			currentSum -= arr[left];
			left++;
		}
	}

	// Return 0 if sum k was never hit
	return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}
