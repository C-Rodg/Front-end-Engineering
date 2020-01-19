// Using a helper function and strings
function printAll(n) {
	const results = [];
	function backtrack(str, left, right) {
		if (str.length === 2 * n) {
			results.push(str);
			return;
		}

		if (left < n) {
			// Add a left parenthesis
			backtrack(str + '(', left + 1, right);
		}
		if (left > right) {
			// Add a right parenthesis
			backtrack(str + ')', left, right + 1);
		}
	}
	backtrack('', 0, 0);
	return results;
}

// Using an array for tracking
function printAllParentheses(n, leftCount, rightCount, output = [], r = []) {
	if (leftCount >= n && rightCount >= n) {
		r.push('' + output);
	}

	if (leftCount < n) {
		output.push('{');
		printAllParentheses(n, leftCount + 1, rightCount, output, r);
		output.pop();
	}

	if (rightCount < leftCount) {
		output.push('}');
		printAllParentheses(n, leftCount, rightCount + 1, output, r);
		output.pop();
	}

	return r;
}

// A slimmed down version
function simplePrint(open, close = 0, str = '') {
	if (open === 0 && close === 0) {
		console.log(str);
	}

	if (open > 0) {
		simplePrint(open - 1, close + 1, str + '{');
	}

	if (close > 0) {
		simplePrint(open, close - 1, str + '}');
	}
}

simplePrint(3);
