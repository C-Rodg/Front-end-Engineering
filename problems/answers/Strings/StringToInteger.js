function stringToInteger(str) {
	let isNegative = false;
	let result = 0;
	for (let idx = 0; idx < str.length; idx++) {
		const char = str[idx];

		// Check if we are working with a negative integer
		if (idx === 0 && char === '-') {
			isNegative = true;
			continue;
		}

		const charNum = Number(char);
		// Ensure this character is a number
		if (!isNaN(charNum)) {
			return false;
		}

		// Result is equal to the previous result times 10, plus the current number
		result = result * 10 + charNum;
	}

	// Multiply by negative one if int should be negative
	return isNegative ? result * -1 : result;
}
