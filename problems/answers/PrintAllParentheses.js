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
