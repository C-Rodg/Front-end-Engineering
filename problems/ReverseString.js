// Given a string, return a new string
// with reversed order of characters

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
