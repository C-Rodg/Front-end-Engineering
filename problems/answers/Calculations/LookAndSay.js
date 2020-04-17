function lookAndSay(n) {
	// Base cases
	if (n === 1) {
		return '1';
	} else if (n === 2) {
		return '11';
	}

	// Generate the terms for the sequence 3 -> n, using the previous term
	let str = '11';
	for (let i = 3; i < n + 1; i++) {
		// In the below loop, each character is processed.
		// To ensure the last character is processed, we add a dummy character
		// to the end of the string.
		str += '$';

		// Initialize variables needed in the loop
		let length = str.length;
		let count = 1; // tracks the matching chars
		let temp = ''; // the next term

		// Process each character of the current sequence
		for (let j = 1; j < length; j++) {
			if (str[j] != str[j - 1]) {
				// Non-matching numbers..

				// Append the count
				temp += String(count);

				// Append the character
				temp += String(str[j - 1]);

				// Reset the count
				count = 1;
			} else {
				// Increment the count
				count += 1;
			}
		}

		// Assign the next sequence
		str = temp;
	}
	return str;
}
