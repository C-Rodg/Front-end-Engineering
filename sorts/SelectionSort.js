// Runtime: O(n^2)

// Summary - sort the array from the beginning with double loops (similar to bubble sort)
function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let indexOfMin = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexOfMin]) {
				indexOfMin = j;
			}
		}

		// Check if there is a different lowest value
		if (indexOfMin !== i) {
			let lesser = arr[indexOfMin];
			arr[indexOfMin] = arr[i];
			arr[i] = lesser;
		}
	}
	return arr;
}
