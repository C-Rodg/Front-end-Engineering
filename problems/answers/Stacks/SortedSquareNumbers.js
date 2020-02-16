function sortedSquareNumbers(nums) {
	const stack = [];
	const results = [];

	for (let num of nums) {
		// Create the square
		const square = num * num;

		// Check if the original number is negative or positive
		if (num < 0) {
			stack.push(square);
		} else {
			// Check if anything on the stack is less than the current square
			while (stack.length && stack[stack.length - 1] <= square) {
				results.push(stack.pop());
			}

			// Add the current squared item
			results.push(square);
		}
	}

	// Check if we have any remaining items in the stack
	while (stack.length) {
		results.push(stack.pop());
	}

	return results;
}
