// Proper solution (think 2 sum problem) O(n^2)
function getTriplets(arr) {
	const triplets = [];

	// Sort the array
	arr.sort((a, b) => a - b);

	for (let i = 0; i < arr.length; i++) {
		// Check for zeros
		if (arr[i] === 0) {
			continue;
		}
		const currentSquare = arr[i] * arr[i];
		let low = 0;
		let high = arr.length - 1;
		while (low < high) {
			// Check for same index
			if (low === i || arr[low] === 0) {
				low++;
				continue;
			}

			// Check for same index
			if (high === i || arr[high] === 0) {
				high--;
				continue;
			}

			// Calculate other squares
			let lowSquare = arr[low] * arr[low];
			let highSquare = arr[high] * arr[high];

			// Determine if complete or which direction to move pointers
			if (currentSquare === lowSquare + highSquare) {
				triplets.push([currentSquare, lowSquare, highSquare]);
			} else if (lowSquare + highSquare - currentSquare > 0) {
				high--;
			} else {
				low++;
			}
		}
	}

	return triplets;
}

// Naive Solution: O(n^3)
function getTripletsNaive(arr) {
	const triplets = [];
	for (let i = 0; i < arr.length - 2; i++) {
		// Skip zeros
		if (arr[i] === 0) {
			continue;
		}
		for (let j = i + 1; j < arr.length - 1; j++) {
			// Skip zeros
			if (arr[j] === 0) {
				continue;
			}
			for (let k = j + 1; k < arr.length; k++) {
				// Skip zeros
				if (arr[k] === 0) {
					continue;
				}
				if (isTriplet(arr[i], arr[j], arr[k])) {
					triplets.push([arr[i], arr[j], arr[k]]);
				}
			}
		}
	}

	return triplets;
}

// Helper to determine if pythagorean triplet
function isTriplet(a, b, c) {
	let sqA = a * a;
	let sqB = b * b;
	let sqC = c * c;

	if (sqA + sqB === sqC) {
		return true;
	} else if (sqA + sqC === sqB) {
		return true;
	} else if (sqB + sqC === sqA) {
		return true;
	}
	return false;
}
