// Runtime O(n^2)
// This sort is not recommended for use

// Summary - pushes greatest values to the end of array
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// Swap
				const lesser = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = lesser;
			}
		}
	}
	return arr;
}
