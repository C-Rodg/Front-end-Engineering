function findSlidingMaxWindow(arr, windowSize) {
	const results = [];
	const window = [];
	for (let i = 0; i < windowSize; i++) {
		while (window.length > 0 && arr[window[window.length - 1]] <= arr[i]) {
			window.pop();
		}
		window.push(i);
	}
	results.push(arr[window[0]]);

	for (let j = windowSize; j < arr.length; j++) {
		while (window.length > 0 && arr[window[window.length - 1]] <= arr[i]) {
			window.pop();
		}

		if (window.length && window[0] <= j - windowSize) {
			window.shift();
		}
		window.push(i);
		results.push(arr[window[0]]);
	}

	return results;
}
