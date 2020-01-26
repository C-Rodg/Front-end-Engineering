function subarrayWithTargetSum(arr, k) {
	// Initialize map with value to support subarrays starting at index 0
	const map = { 0: -1 };

	// Track the sum
	let sum = 0;

	// Loop through the array
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		map[sum] = i;

		if (map.hasOwnProperty(sum - k)) {
			// we have found a match, return the sliced array
			return arr.slice(map[sum - k] + 1, i + 1);
		}
	}

	// If we made it this far, nothing was found
	return null;
}
