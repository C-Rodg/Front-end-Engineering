function romanNumeralsToDecimal(str) {
	// Create a map of the roman numerals to decimal
	const NUMERALS = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};

	let idx = str.length - 1;
	let prev = 0;
	let sum = 0;

	// We process from the end of the string to the beginning
	while (idx >= 0) {
		const val = NUMERALS[str[i]];
		if (val > prev) {
			// Current index value is greater than the number after it, so we just add
			sum += val;
		} else {
			// Current index value is less than or equal to the number coming after it, so it's subtracted
			sum -= val;
		}

		// Set the current index value as the new previous
		prev = val;

		// Decrement
		idx -= 1;
	}

	return sum;
}
