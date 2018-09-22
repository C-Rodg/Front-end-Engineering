// Runtime O(n^2) : Space O(1)
// works well with nearly sorted arrays - like updating an array over time
// this is a destructive sort

// Summary - sort from the beginning of array
// select the first unsorted element 'i' and place in correct portion of sorted array (before i)
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		for (let j = 0; j < i; j++) {
			if (arr[i] < arr[j]) {
				const spliced = arr.splice(i, 1);
				arr.splice(j, 0, spliced[0]);
			}
		}
	}
	return arr;
}
