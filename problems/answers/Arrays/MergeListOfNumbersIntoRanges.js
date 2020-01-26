function mergeListOfNumbersIntoRanges(arr) {
	const results = [];
	// track the current low and current high of the range
	let currentLow = arr[0];
	let currentHigh = arr[0];

	// Loop through the numbers
	for (let num of arr) {
		// if the current high + 1 is still less than 'num' then we know the range is broken.
		if (currentHigh + 1 < num) {
			// Add the result
			results.push([currentLow, currentHigh]);
			// Since 'num' broke the range, it is now our currentLow
			currentLow = num;
		}
		// the current high is always the last number we saw
		currentHigh = num;
	}

	return results;
}
