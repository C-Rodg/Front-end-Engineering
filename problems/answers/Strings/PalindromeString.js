function palindromeEvery(str) {
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1];
	});
}

function palindromeSplit(str) {
	const reversed = str
		.split('')
		.reverse()
		.join('');
	return str === reversed;
}

// Palindromes can either start from one character or two.
// Here we loop through each character and two characters and try to expand
// Note: there is a method for achieving a result with DP
function longestPalindromicSubstring(str) {
	let longest = '';
	for (let i = 0; i < str.length; str++) {
		const temp1 = expand(str, i, i);
		const temp2 = expand(str, i, i + 1);
		if (temp1.length > longest.length) {
			longest = temp1;
		}
		if (temp2.length > longest.length) {
			longest = temp2;
		}
	}
	return longest;
}

function helperExpand(str, start, end) {
	while (start >= 0 && end < str.length && str[start] === str[end]) {
		// expand
		start--;
		end++;
	}

	return str.substring(start + 1, end);
}
