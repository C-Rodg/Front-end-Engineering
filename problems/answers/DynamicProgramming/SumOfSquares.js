function sumOfSquares(n) {
	// Get all squares that are less than n
	const possibleSquares = [];
	let temp = 1;
	while (temp * temp <= n) {
		possibleSquares.push(temp * temp);
		temp += 1;
	}

	// Create an array to hold our DP solutions
	// NOTE: we are doing this using only a one-dimensional array, can also be done multidimensionally
	const minSums = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);

	// Setup our known values
	minSums[0] = 0;

	// Loop from 0 -> n+1
	for (let i = 0; i < minSums.length; i++) {
		// Loop through each square
		for (let square of possibleSquares) {
			// ensure we are still in bounds
			if (i + square < minSums.length) {
				// Check if the index we are trying to solve
				minSums[i + square] = Math.min(minSums[i + square], minSums[i] + 1);
			}
		}
	}

	// Return the calculated value at n
	return minSums[n];
}
