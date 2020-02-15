function reversePolish(arr) {
	const operatorSet = ['/', '*', '+', '-'];
	const stack = [];
	for (let c of arr) {
		if (~operatorSet.indexOf(c)) {
			// Working with an operator,
			// execute it by taking the last two values and calculating the result
			const b = stack.pop();
			const a = stack.pop();
			switch (c) {
				case '/':
					stack.push(a / b);
					break;
				case '*':
					stack.push(a * b);
					break;
				case '+':
					stack.push(a + b);
					break;
				case '-':
					stack.push(a - b);
					break;
			}
		} else {
			// Working with an integer, add it to the stack
			stack.push(c);
		}
	}

	// Return the final result
	return stack[0];
}
