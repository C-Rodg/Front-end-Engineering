function reverseWords(sentence) {
	// Reverse the entire sentence
	sentence = reverseSection(sentence, 0, sentence.length - 1);

	// Go through and reverse each word individually
	let start = 0;
	let end = 0;
	while (true) {
		if (sentence[start] === ' ') {
			start++;
		}

		end = start + 1;
		while (sentence[end] !== ' ' && end < sentence.length) {
			end++;
		}

		sentence = reverseSection(sentence, start, end - 1);

		start = end;
	}
	return sentence;
}

// Helper to reverse a section of a string
function reverseSection(str, start, end) {
	while (start < end) {
		let temp = str[start];
		str = replaceAt(str, start, str[end]);
		str = replaceAt(str, end, temp);
	}
	return str;
}

// Helper to replace a character in a string
function replaceAt(str, idx, char) {
	return str.substr(0, idx) + char + str.substr(idx + char.length);
}
