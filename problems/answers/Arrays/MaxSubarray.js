function maxSubarray(arr) {
	if (arr.length === 0) {
		return 0;
	}

	let currentSum = 0;
	let maxSum = Number.MIN_SAFE_INTEGER;

	for (let num in arr) {
		// Add in the current number
		currentSum += num;

		if (currentSum <= 0) {
			// Since the current sum is below 0, we have no use for it so reset
			currentSum = 0;
			// Still check the max sum with num because this singular num might be the biggest we have
			maxSum = Math.max(num, maxSum);
		} else {
			// Our current sum is greater than 0 so check if it's the biggest sum we've found yet
			maxSum = Math.max(currentSum, maxSum);
		}
	}

	return maxSum;
}
