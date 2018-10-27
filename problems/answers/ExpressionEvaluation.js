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
	const opStack = [];
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
