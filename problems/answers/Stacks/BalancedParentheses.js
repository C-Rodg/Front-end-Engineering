function isBalanced(str) {
	let leftStack = [];
	let starStack = [];

	// Loop through the characters
	// This loop ensures that we are balancing the ")" characters
	for (let i = 0; i < str.length; i++) {
		const char = str[i];

		if (char === '(') {
			leftStack.push(i);
		} else if (char === '*') {
			starStack.push(i);
		} else if (char === ')') {
			if (leftStack.length) {
				// First attempt to pop a left bracket
				leftStack.pop();
			} else if (starStack.length) {
				// Second attempt to pop a wildcard
				starStack.pop();
			} else {
				// If we have neither, then there is no possible
				// way for us to be balanced
				return false;
			}
		}
	}

	// We are done balancing ")".
	// We must still ensure that remaining "(" can be
	// balanced as well.
	while (leftStack.length && starStack.length) {
		let leftLocation = leftStack.pop();
		let starLocation = starStack.pop();
		if (starLocation < leftLocation) {
			// if it is: * (
			// then there is no way to balance it
			return false;
		}
	}

	// Ensure left stack is completely balanced now
	if (leftStack.length) {
		return false;
	}

	// Completely balanced!
	return true;
}
