// Rules:
// 2 dips = false
// 0 dips = true
// 1 dip =
//      true if idx = 0
//      true if idx = end - 2
//      true if idx <= idx + 2 (moves next point up)
//      true if idx - 1 <= idx + 1 (moves current point down)
//  else false
function nonDecreasingArray(arr) {
	let idx = null;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			if (idx !== null) {
				// 2 dips found
				return false;
			}
			idx = i;
		}
	}
	if (idx === null) {
		// 0 dips
		return true;
	}

	if (
		idx === 0 || // beginning
		idx === arr.length - 2 || // end
		arr[idx] <= arr[idx + 2] || // can move next point up
		arr[idx - 1] <= arr[idx + 1] // can move current point down
	) {
		// 1 dip, but follows the rules
		return true;
	}

	// 1 dip, but does not follow the rules
	return false;
}
