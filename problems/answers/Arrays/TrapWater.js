function trapWater(arr) {
	// Calculate the tallest to the left and right at each index
	const biggestToLeft = [];
	const biggestToRight = [];

	// Calculate the biggest value to the left
	biggestToLeft[0] = arr[0];
	for (let i = 1; i < arr.length; i++) {
		// We know the current max is at i - 1, so compare it to our current value
		biggestToLeft[i] = Math.max(biggestToLeft[i - 1], arr[i]);
	}

	// Calculate the biggest value to the right
	biggestToRight[arr.length - 1] = arr[arr.length - 1];
	for (let i = arr.length - 2; i >= 0; i--) {
		// We know the current max is either i+1 or the current value
		biggestToRight[i] = Math.max(biggestToRight[i + 1], arr[i]);
	}

	// We now have the biggest columns to the left and right.
	// Make one final pass and calculate the water each index can hold
	// with the formula: Math.min(biggestToLeft, biggestToRight) - height
	let water = 0;
	for (let i = 0; i < arr.length; i++) {
		const biggestLeft = biggestToLeft[i];
		const biggestRight = biggestToRight[i];
		water += Math.min(biggestLeft, biggestRight) - arr[i];
	}

	// return the trapped water
	return water;
}
