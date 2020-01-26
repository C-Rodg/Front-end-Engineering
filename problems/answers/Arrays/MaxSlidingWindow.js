function findSlidingMaxWindow(arr, windowSize) {
	const results = [];

	// window is an array that contains the indexes of the max items.
	// It will always be ordered from Highest -> Lowest because once there
	// is a new highest number, there is no use for the old highest numbers.
	const window = [];

	// Setup the initial window
	for (let i = 0; i < windowSize; i++) {
		// if there is a new maximum number that is closer to the end of the window
		// we should remove the previous maxes because those will no longer ever be used
		while (window.length > 0 && arr[window[window.length - 1]] <= arr[i]) {
			window.pop();
		}
		window.push(i);
	}

	// Add this initial window to the results
	results.push(arr[window[0]]);

	// Loop through the remaining items in the array
	for (let j = windowSize; j < arr.length; j++) {
		// If a new highest number is found, remove everything lower than it
		while (window.length > 0 && arr[window[window.length - 1]] <= arr[i]) {
			window.pop();
		}

		// if the current highest number is now outside of the window, remove it
		if (window.length && window[0] <= j - windowSize) {
			window.shift();
		}

		// Add the current index to our window data structure
		// Since we first cleaned up 'window', this 'i' will be the new max
		// or a future possible max
		window.push(i);

		// Add the current max for this window
		results.push(arr[window[0]]);
	}

	// Return the results
	return results;
}
