// Solution 2:
// 4 main cases to handle - digit, open parentheses, closed parentheses, and operator
function evaluate(str) {
	const values = [];
	const ops = [];
	let i = 0;
	while (i < str.length) {
		const char = str[i];
		if (char === ' ') {
			// Just move on
			i++;
			continue;
		} else if (char === '(') {
			// Just add it to the operator stack
			ops.push(char);
		} else if (isDigit(char)) {
			let val = 0;
			// check to see if there is more than one digit
			while (i < str.length && isDigit(str[i])) {
				val = val * 10 + Number(str[i]);
				i += 1;
			}

			values.push(val);
		} else if (char === ')') {
			while (ops.length && ops[ops.length - 1] !== '(') {
				// Repeatedly process the values between the parentheses
				let val2 = values.pop() || 0;
				let val1 = values.pop() || 0;
				let op = ops.pop();
				let result = applyOp(val1, val2, op);
				// Replace the popped values with the result
				values.push(result);
			}

			// Remove the opening parentheses
			ops.pop();
		} else {
			// Must be an operator

			// while there are operators and the precedence of the current character is less than the precedence of the top in the stack
			while (
				ops.length &&
				getPrecedence(char) <= getPrecedence(ops[ops.length - 1])
			) {
				let val2 = values.pop() || 0;
				let val1 = values.pop() || 0;
				let op = ops.pop();
				let result = applyOp(val1, val2, op);
				values.push(result);
			}

			// Add the new operator to the stack
			ops.push(char);
		}

		// Increment
		i += 1;
	}
}

// Helper - get a numerical value for precedence
function getPrecedence(char) {
	if (char === '+' || char === '-') {
		return 1;
	} else if (char === '*' || char === '/') {
		return 2;
	}
	return 0;
}

// Helper - apply a calculation
function applyOp(a, b, op) {
	if (op === '+') {
		return a + b;
	} else if (op === '-') {
		return a - b;
	} else if (op === '*') {
		return a * b;
	} else if (op === '/') {
		return a / b;
	}
}

// Solution 2 - slightly more complex
function expressionEvaluation(str) {
	const operands = [];
	// Get postfix representation
	const postfix = convertToPostfix(str);

	// Loop through postfix notation and get value
	for (let i = 0; i < postfix.length; i++) {
		if (postfix.isOperator) {
			const val2 = operands.pop();
			const val1 = operands.pop();
			const op = postfix.value;
			if (op === '+') {
				operands.push(val1 + val2);
			} else if (op === '-') {
				operands.push(val1 - val2);
			} else if (op === '/') {
				operands.push(val1 / val2);
			} else if (op === '*') {
				operands.push(val1 * val2);
			}
		} else {
			operands.push(postfix.value);
		}
	}

	// Get the last calculated value
	return operands.pop();
}

// Convert string to postfix array
function convertToPostfix(str) {
	// Build postfix notation
	const operators = [];
	let postfix = [];

	// Loop through string
	let start = 0;
	let end = str.length;
	while (start < end) {
		const char = str[start];
		// Check for spaces
		if (char === ' ' || char === '\t') {
			start++;
			continue;
		}

		if (isOperator(char)) {
			// If last item in stack has a higher precedence, add the items to
			while (operators && precedes(operators[operators.length - 1], char)) {
				const op = new Token(operators.pop(), true);
				postfix.push(op);
			}
			operators.push(char);
			start++;
		} else {
			// Handle a digit (can be multiple digits..)
			const obj = stringToDigit(str, start);
			const digit = obj.digit;
			start = obj.index;
			const num = new Token(digit, false);
			postfix.push(num);
		}
	}

	// Clear remaining operators from stack
	while (operators.length > 0) {
		const op = new Token(operators.pop(), true);
		postfix.push(op);
	}

	// return the postfix array
	return postfix;
}

// Helper to extract entire number
function stringToDigit(str, i) {
	let n = str.length;

	// Check if we are at the end
	if (i >= n) {
		return null;
	}

	let temp = '';

	// Skip past white space
	while (i < n && (str[i] === ' ' || str[i] === '\t')) {
		i++;
	}

	// Check again if we are at the end
	if (i >= n) {
		return null;
	}

	// Check for negative value
	if (str[i] === '-') {
		temp += '-';
		i++;
	}

	while (i < n) {
		let ch = str[i];

		// Break at end of digits
		if (ch !== '.' && !isDigit(ch)) {
			break;
		}

		temp += ch;
		i++;
	}

	return {
		digit: parseInt(temp, 10),
		index: i
	};
}

// Helper to check if it's a digit
function isDigit(c) {
	return c >= '0' && c <= '9';
}

// Helper to determine if operator
function isOperator(c) {
	return c === '/' || c === '*' || c === '+' || c === '-';
}

// Helper to determine precedence
function precedes(op1, op2) {
	if (op1 === '*' || op1 === '/') {
		return true;
	}

	if (op1 === '+' || op1 === '-') {
		if (op2 === '+' || op2 === '-') {
			return true;
		}
	}
	return false;
}

// Helper to hold each item in postfix notation
class Token {
	constructor(d, isOperator) {
		this.value = d;
		this.isOperator = isOperator;
	}
}
