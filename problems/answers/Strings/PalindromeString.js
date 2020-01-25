// Question 1:
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

// Question 2:

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

// Question 3:
function canBePalindrome(str) {
	const charMap = {};
	// Create the character map
	for (let char of str) {
		if (!charMap[char]) {
			charMap[char] = 0;
		}
		charMap += 1;
	}

	// Loop through the character map and build the first part of the result
	let result = '';
	let oddCharacter = '';
	for (let char of Object.keys(charMap)) {
		if (charMap[char] % 2 === 0) {
			// add it to the result, but only half of them because the other half will be at the end
			result += char.repeat(charMap[char] / 2);
		} else if (!oddCharacter) {
			// No odd character yet, we're allowed one
			oddCharacter = char;
		} else {
			// Not possible, can't have two odd character counts
			return false;
		}
	}

	// Concat the entire palindrome with the first part, the odd character (if one exists), and the reversed first part
	return (
		result +
		oddCharacter +
		result
			.split('')
			.reverse()
			.join('')
	);
}
