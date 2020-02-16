function partition(arr, n) {
	let lowIdx = 0;
	let highIdx = arr.length - 1;

	// loop until low and high cross
	while (lowIdx <= highIdx) {
		// Look at the current value
		const currValue = arr[lowIdx];
		if (currValue <= n) {
			// this item is in the correct place, increment low
			lowIdx++;
		} else {
			// this item needs to move to the higher side, swap it
			swap(arr, lowIdx, highIdx);
			highIdx--;
		}
	}

	// Return the arranged array
	return arr;
}
