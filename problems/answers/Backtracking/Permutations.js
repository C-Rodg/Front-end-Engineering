function permutations(arr) {
	const results = [];

	function permuateHelper(start) {
		if (start === arr.length - 1) {
			results.push([...arr]);
		}
		for (let i = start; i < arr.length; i++) {
			swap(arr, start, i);
			permuateHelper(start + 1);
			swap(arr, start, i);
		}
	}
	permuateHelper(0);
	return results;
}

function swap(arr, a, b) {
	const temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}
