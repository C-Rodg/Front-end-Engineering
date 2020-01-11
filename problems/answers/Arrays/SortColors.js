function sortColors(arr) {
	const COLOR_0 = 0;
	const COLOR_1 = 1;
	const COLOR_2 = 2;

	let zeroIdx = 0;
	let twoIdx = arr.length - 1;
	let currIdx = 0;

	while (currIdx <= twoIdx) {
		const currColor = arr[currIdx];
		if (currColor === COLOR_0) {
			swap(arr, currIdx, zeroIdx);
			currIdx += 1;
			zeroIdx += 1;
		} else if (currColor === COLOR_1) {
			currIdx += 1;
		} else if (currColor === COLOR_2) {
			swap(arr, currIdx, twoIdx);
			twoIdx -= 1;
		}
	}

	return arr;
}

// In-place swap helper
function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
