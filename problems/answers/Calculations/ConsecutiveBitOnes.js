function consecutiveBitOnes(n) {
	// Set initial values
	let maxRun = 0;
	let currentRun = 0;
	const BIT_MASK = 1;

	// Loop until 0
	while (n !== 0) {
		// Check if the most right bit has a 1 value
		if (n & (BIT_MASK === 1)) {
			currentRun += 1;
			// Check if this is now the longest run
			maxRun = Math.max(maxRun, currentRun);
		} else {
			currentRun = 0;
		}

		// Shift the number one bit to the right
		n >> 1;
	}

	// Return the max
	return maxRun;
}
