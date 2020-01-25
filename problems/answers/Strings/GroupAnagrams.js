function groupAnagrams(arr) {
	const map = {};
	// Loop over every word
	for (let word of arr) {
		// Get the custom bit alphabet key
		const key = getAlphaKey(word);
		if (!map[key]) {
			map[key] = [];
		}
		// Add the original word with the other words with the same key
		map[key].push(word);
	}
	return Object.values(map);
}

// This function is used to avoid having to sort the words
function getAlphaKey(word) {
	const key = Array(26).fill(0);
	for (let char of word) {
		// Get the correct offset, so 'A' = idx 0...
		const idx = char.toUpperCase().charCodeAt(0) - 65;
		key[idx] += 1;
	}
	return key;
}
