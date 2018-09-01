// Given an integer, return the
// reversed integer

function reverseInt(n) {
	const reversedString = String(n)
		.split('')
		.reverse()
		.join('');
	return parseInt(reversedString) * Math.sign(n);
}
