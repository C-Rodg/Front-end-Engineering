// The main idea here is to build a character map that is offset in the positive direction for the sub word.
// We then go through the main word and subtract for new characters (and add the one we are removing if our window is big enough).
// Since the sub anagram offset the character map size initially, if at any point it has 0 keys it must be balanced and this must be an anagram.
function findAnagrams(word, sub) {
	const results = [];
	const charMap = {};
	// Build a character map of the sub anagram and set characters positively
	for (let char of sub) {
		if (!charMap[char]) {
			charMap[char] = 0;
		}
		charMap[char] += 1;
	}

	// Loop through the characters in the full word
	for (let i = 0; i < word.length; i++) {
		const newChar = word[i];

		// We are bigger than the sub word length, so we must remove the old character as the window shifts
		if (i >= sub.length) {
			const oldChar = word[i - sub.length];
			charMap[oldChar] += 1;
			if (charMap[oldChar] === 0) {
				delete charMap[oldChar];
			}
		}

		// Add in the new character
		if (!charMap[newChar]) {
			// if it doesn't yet exist, initially set it to 0
			charMap[newChar] = 0;
		}
		charMap[newChar] -= 1;

		// If our window has advanced enough and it is now perfectly balanced, we must have an anagram
		if (i + 1 >= sub.length && Object.keys(charMap) === 0) {
			results.push([i - sub.length, i]);
		}
	}

	// Return our matches
	return results;
}
