function productWithoutSelf(arr) {
	const results = [];
	let prefix = 1;
	for (let i = 0; i < arr.length; i++) {
		results[i] = prefix;
		prefix *= arr[i];
	}
	// [1, 1, 2, 6]
	let suffix = 1;
	for (let j = arr.length - 1; j >= 0; j--) {
		results[j] *= suffix;
		suffix *= arr[j];
	}

	return results;
}

// The idea is simple. The product basically is calculated using the numbers
// before the current number and the numbers after the current number. Thus, we can scan the array twice.
// First, we calcuate the running product of the part before the current number. Second, we calculate
// the running product of the part after the current number through scanning from the end of the array.
