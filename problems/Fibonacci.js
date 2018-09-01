// Print out the n-th entry of the
// fibonacci sequence

// Recursive solution
function fib(n) {
	if (n < 2) {
		return n;
	}
	return fib(n - 1) + fib(n - 2);
}

// Memoize function
function memoize(fn) {
	const cache = {};
	return function(...args) {
		const key = JSON.stringify(args);
		if (cache[key]) {
			return cache[key];
		}
		const result = fn.apply(this, args);
		cache[key] = result;

		return result;
	};
}
// Use...
const fib = memoize(fib);

// Iterative solution - linear runtime O(n)
function fibIterative(n) {
	const result = [0, 1];

	for (let i = 2; i <= n; i++) {
		const a = result[i - 1];
		const b = result[i - 2];
		results.push(a + b);
	}

	return results[n];
}
