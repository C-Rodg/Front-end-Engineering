// Runtime: O(n * k) where n is list length and k is the number of digits
// Spacetime: O(n + k)

// This is a non-comparison sort
// Works on lists of numbers
// Exploits the fact that information about the size of the number is encoded in the number of digits

// The number of times it needs to sort depends on how many digits the longest number has

// Summary:
// 1.) get longest digit length
// 2.) Loop for 0...longest digit length
// 3.) In each loop, create a digits bucket
//      4.) Loop through all numbers (parameter) and get the digit at the current digit index
//      5.) Place in correct digit bucket location
// 6.) Replace numbers list (parameter) with closer sorted list using [].concat(...digitBuckets) for next loop
// 7.) Return numbers list
function radixSort(arr) {
	const digitCount = mostDigits(arr);
	// Loop through digit indexes
	for (let d = 0; d < digitCount; d++) {
		// Create digit buckets
		const digitBuckets = Array.from({ length: 10 }, () => []);

		// Loop through numbers in array
		for (let i = 0; i < arr.length; i++) {
			// Get current digit for current number and add to proper bucket
			const currentDigitIndex = getDigit(arr[i], k);
			digitBuckets[currentDigitIndex].push(arr[i]);
		}
		// Reasign list of numbers each time to get closer to sorted
		arr = [].concat(...digitBuckets);
	}
	return arr;
}

// Get digit at index
function getDigit(num, i) {
	// Take num
	// Divide it by 10 ^ i
	// Floor the value
	// Modulus 10
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

	// Using strings
	// let str = String(num);
	// return Number(str[str.length - 1 - i]);
}

// Gets the length of the number
function digitCount(num) {
	if (num === 0) {
		return 1;
	}
	// Take log 10 of num === 10 ^ answer = num
	// Floor the value
	// Add 1
	return Math.floor(Math.log10(Math.abs(num))) + 1;

	// Using strings
	// return String(num).length;
}

// Gets the highest digit count from a list of numbers
function mostDigits(arr) {
	let maxDigits = 0;
	for (let i = 0; i < arr.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(arr[i]));
	}
	return maxDigits;
}
