function rotatedBSTSearch(arr, key) {
	let low = 0;
	let high = arr.length - 1;
	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		if (arr[mid] === key) {
			return mid;
		} else if (key >= arr[low] && key <= arr[mid]) {
			high = mid - 1;
		} else if (key <= arr[high] && key > arr[mid]) {
			low = mid + 1;
		} else if (arr[mid] > arr[high]) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	return -1;
}
