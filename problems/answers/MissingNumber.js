function findMissing(arr) {
	let max = 0;
	let sum = 0;

	// Get the max number to know what we are calculating to
	// and also keep track of the sum of the set we have
	for (let i = 0; i < arr.length; i++) {
		max = Math.max(max, arr[i]);
		sum += arr[i];
	}

	// Return the difference in sums
	const properSum = (max * (max + 1)) / 2;
	return properSum - sum;
}
