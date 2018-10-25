function maxSumNonAdjacent(arr) {
	const results = [];
	results.push(arr[0]);
	for (let i = 1; i < arr.length; i++) {
		let previousResults = results[i - 2] || 0; // handle out of bounds

		// Comparing:
		// 1.) Current index value 2.) Previous Sum plus Current Index Value 3.) Previous offset results
		const maxSoFar = Math.max(arr[i], previousResults + arr[i], results[i - 1]);
		results.push(maxSoFar);
	}

	return results[results.length - 1];
}
