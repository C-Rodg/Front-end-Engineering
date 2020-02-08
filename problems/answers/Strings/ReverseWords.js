// ------------ QUESTION 1 ---------------- //
function reverseShort(str) {
	return str
		.split('')
		.reverse()
		.join('');
}

function reverseIterative(str) {
	let newStr = '';
	for (let char of str) {
		newStr = char + newStr;
	}
	return newStr;
}

function reverseReduce(str) {
	return str.split('').reduce((acc, curr) => {
		return curr + acc;
	}, '');
}

// ------------ QUESTION 2 ---------------- //
function reverseWords(str) {
	// Reverse the entire sentence
	let sentence = reverseSection(str, 0, str.length - 1);

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
		if (end >= sentence.length) {
			break;
		}
	}

	return sentence;
}

// Helper -  Reverse a section of a string
function reverseSection(str, start, end) {
	while (start < end) {
		let temp = str[start];
		str = replaceAt(str, start, str[end]);
		str = replaceAt(str, end, temp);
		start++;
		end--;
	}
	return str;
}

// Helper - Replace a character in a string
function replaceAt(str, idx, char) {
	return str.substr(0, idx) + char + str.substr(idx + char.length);
}
