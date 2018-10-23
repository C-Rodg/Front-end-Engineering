// Solution #1 - rotate, then rotate subsections
function rotateArray(arr, n) {
	rotateArray(arr, 0, arr.length - 1);
	rotateArray(arr, 0, n - 1);
	rotateArray(arr, n, arr.length - 1);
}

function reverse(arr, start, end) {
	while (start < end) {
		let temp = arr[start];
		arr[end] = arr[start];
		arr[start] = temp;
		start++;
		end--;
	}
}

// Solution #2 - calculate positive shifts and make temp array
function rotateArrayShift(arr, n) {
	// Calculate positive shifts
	n = n % arr.length;
	if (n < 0) {
		n = n + arr.length;
	}

	// Copy last 'n' elements to temp array
	let temp = [];
	for (let i = 0; i < n; i++) {
		temp[i] = arr[arr.length - n + i];
	}

	// Copy elements from 0 -> Length - n into slots after
	for (let i = arr.length - 1; i >= n; i--) {
		arr[i] = arr[i - n];
	}

	// Copy temp elements into original array
	for (let i = 0; i < n; i++) {
		arr[i] = temp[i];
	}

	return arr;
}
