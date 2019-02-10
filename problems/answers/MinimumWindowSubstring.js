const minimumWindowSubstring = (s, t) => {
	let charCount = t.length;
	let begin = 0;
	let end = 0;
	let minStartIdx = 0;
	let minLength = Number.MAX_VALUE;

	// Initialize hash map
	const table = {};
	for (let c of t) {
		table[c] = table[c] ? table[c] + 1 : 1;
	}

	// Begin going through string
	while (end < s.length) {
		// The idea here is to shift the end of the
		// window toward the end of the string until we get
		// a valid case.  Once valid case is found, enter inner lo
		const endChar = s[end];

		if (table[endChar] > 0) {
			charCount--;
		}
		table[endChar]--;
		end++;

		while (charCount === 0) {
			// Check if current valid case length is
			// less than the previous (or original) and save it if it is
			if (end - begin < minLength) {
				minLength = end - begin;
				minStartIdx = begin;
			}

			const beginChar = s[begin];
			table[beginChar]++;
			if (table[beginChar] > 0) {
				charCount++;
			}
			begin++;
		}
	}

	return minLength === Number.MAX_VALUE ? '' : s.substr(minStartIdx, minLength);
};

// TEMPLATE for most substring problems
const findSubstring = s => {
	let counter; // used to check whether substring is valid
	let begin = 0;
	let end = 0; // two pointers, one for head and one for tail
	let d; // length of substring

	let map = {};
	for (let i = 0; i < 1; i++) {} // Initialize hash map here

	while (end < s.length) {
		if (map[s[end]] > 0) {
			// modify counter here..
		}

		while (counter === 0) {
			// while counter condition...
			// update d here if finding minimum
			// modify counter here
			// increase begin to make it invalid/valid again
		}

		// update d here if finding maximum
	}

	return d;
};
