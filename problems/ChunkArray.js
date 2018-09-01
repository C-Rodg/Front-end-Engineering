// Given an array and chunk size
// divide the array into subarrays to size

function chunkWhile(arr, size) {
	const chunked = [];
	let index = 0;
	while (index < arr.length) {
		const slice = arr.slice(index, index + size);
		chunked.push(slice);
		index += size;
	}
	return chunked;
}

function chunkIterative(arr, size) {
	const chunked = [];
	for (let el of arr) {
		const last = chunked[chunked.length - 1];
		if (!last || last.length === size) {
			chunked.push([el]);
		} else {
			last.push(el);
		}
	}
	return chunked;
}
