// Given a matrix of 0's and 1's
// find the biggest congregation of 1's

function getBiggestRegion(matrix) {
	let maxRegion = 0;

	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			if (matrix[row][col] === 1) {
				const size = getThisRegionSize(matrix, row, col);
				maxRegion = Math.max(size, maxRegion);
			}
		}
	}
}

function getThisRegionSize(matrix, row, col) {
	if (row < 0 || col < 0 || row > matrix.length || col > matrix[row].length) {
		return 0;
	}
	if (matrix[row][col] === 0) {
		return 0;
	}
	// Mark the node as visited by setting to 0
	// Could also copy graph if can't mutate
	// or increment and then reset to 1
	matrix[row][col] = 0;
	let size = 1;
	for (let r = row - 1; r <= row + 1; r++) {
		for (let c = col - 1; c <= col + 1; c++) {
			// Ensure this isn't the same node
			if (r !== row || c !== col) {
				size += getThisRegionSize(matrix, r, c);
			}
		}
	}
	return size;
}

// Found Here:
// https://www.youtube.com/watch?v=R4Nh-EgWjyQ
