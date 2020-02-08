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

// Bottom up approach O(n)
// Memory implications of doing things this way can be
// fixed by only having bottomUp as a max length of 3.
// But since this isn't recursive performance may be better.
function fibBottom(n) {
	if (n <= 2) {
		return 1;
	}
	const bottomUp = [];
	bottomUp[0] = 0;
	bottomUp[1] = 1;
	bottomUp[2] = 1;

	for (let i = 3; i <= n; i++) {
		bottomUp[i] = bottomUp[i - 1] + bottomUp[i - 2];
	}
	return bottomUp[n];
}
