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
