function minimumParenthesesToAdd(str) {
	// Track the balance of the string.
	// if it ever goes negative, we must add a '(' to the beginning.
	// if it ever goes positive, we must add P amount of ')' to the end.

	let currentBalance = 0;
	let answer = 0;
	for (let char of str) {
		// Track the balance
		if (char === '(') {
			currentBalance += 1;
		} else {
			currentBalance -= 1;
		}

		// went negative so add 1 to the beginning
		if (currentBalance === -1) {
			currentBalance += 1;
			answer += 1;
		}
	}
	return answer + currentBalance;
}
