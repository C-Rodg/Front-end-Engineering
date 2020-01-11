// Two pointer technique.  When we have an unseen character we grow the substring,
// when we have a seen character we repeatedly shrink it until it's valid again.
function lengthOfLongestSubstringNoRepeatingChars(str) {
	let left = 0;
	let right = 0;
	const set = new Set();
	let max = 0;

	while (right < str.length) {
		const char = str[right];
		if (set.has(char)) {
			// repeating character
			const leftChar = str[left];
			set.delete(leftChar);
			left++;
		} else {
			// unseen character
			set.add(char);
			right++;
			max = Math.max(max, right - left);
		}
	}
	return max;
}
