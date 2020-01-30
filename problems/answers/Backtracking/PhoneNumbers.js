function phoneNumbers(number, dict) {
	// Split the phone number string into an array
	const numberArray = number.split('');

	return phoneHelper(numberArray, [], dict);
}

// Recursive function
function phoneHelper(numbers, letters, dict) {
	// If we've processed all numbers in the phone number, check if our current word is valid
	if (!numbers.length) {
		let currentWord = letters.join('');
		if (~dict.indexOf(currentWord)) {
			return [currentWord];
		}
		return [];
	}

	// Get the connected letters for this current number value
	const lettersForThisDigit = letterMap[numbers[0]];

	// Create an array to act on
	let results = [];

	// Loop through the characters
	for (let char of lettersForThisDigit) {
		// constantly concat results with the current character + the recursive returns from the remainder of the phone number
		results = results.concat(
			phoneHelper(numbers.slice(1), [...letters, char], dict)
		);
	}

	return results;
}

// Letter map for numbers -> letters
const letterMap = {
	1: [],
	2: ['a', 'b', 'c'],
	3: ['d', 'e', 'f'],
	4: ['g', 'h', 'i'],
	5: ['j', 'k', 'l'],
	6: ['m', 'n', 'o'],
	7: ['p', 'q', 'r', 's'],
	8: ['t', 'u', 'v'],
	9: ['w', 'x', 'y', 'z'],
	0: []
};
