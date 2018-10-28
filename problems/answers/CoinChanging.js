// Keep an array 'solution' of size amount + 1 and initialize to 0 except solution[0] = 1.
// (+1 because must take into account solution for '0' amount = 1 possible way)

// Loop through denomination types
// From denomination value til amount + 1 (or solution.length)
// Solution at i = solution[i] + solution[i - denominationValue]

// Bottom up approach - tabulation method
function coinWays(denominations, amount) {
	const solution = [];

	// Initialize with zeros
	for (let i = 0; i < amount + 1; i++) {
		solution[i] = 0;
	}

	// Set 0 index = 1 because providing 0 coins has one solution
	solution[0] = 1;

	// Go through each denomination
	for (let denomIndex = 0; denomIndex < denominations.length; denomIndex++) {
		// Loop from denomination value to amount + 1,
		// which builds the soultions array
		const currentDenomination = denominations[denomIndex];
		for (let i = currentDenomination; i < amount + 1; i++) {
			solution[i] += solution[i - currentDenomination];
		}
		// The for loop above is basically saying:
		// From current coin value to amount
		// solution at index 'i' = solution['i' - denominationAmount]
	}

	// Return index for amount solved for
	return solution[amount];
}

// Recursive solution - top down approach
function coinWaysRec(denominations, coins, amount) {
	// base case
	if (amount === 0) {
		return 1;
	}

	// base case 2
	if (amount < 0) {
		return 0;
	}

	// if there are no coins and amount is still greater than 0
	// then no solution exists
	if (coins <= 0 && amount >= 1) {
		return 0;
	}

	return (
		coinWaysRec(denominations, coins - 1, amount) +
		coinWaysRec(denominations, coins, amount - denominations[coins - 1])
	);
}
