// Given an array of valid words and a phone number,
// determine what words can be made using that phone number.

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

function phoneNumbers(number, validWords) {
	return [];
}

// Hint 1: Think about your return value, what would allow you to track a list of words you should keep?

// Hint 2: DFS
