// Given a string, return T/F
// for palindrome (same forward and backwards)

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
