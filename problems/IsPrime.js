// Runtime is O(n)

// Return whether the number is prime
function isPrime(n) {
	// Base Case #1
	if (n === 1) {
		return false;
	}
	// Base case #2
	if (n === 2) {
		return true;
	}
	// Loop through to see if anything is divisible
	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}
