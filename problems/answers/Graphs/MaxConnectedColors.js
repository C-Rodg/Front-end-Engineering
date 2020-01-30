function connectedColors(matrix) {
	let max = 0;
	// Loop through all rows and columns
	for (let r = 0; r < matrix.length; r++) {
		for (let c = 0; c < matrix[r].length; c++) {
			// Get the connected colors for this cell
			const connectedHere = getConnected(matrix, r, c, {});

			// Determine if it's the max
			max = Math.max(max, connectedHere);
		}
	}
	return max;
}

// Recursive function to get count of connected cells
function getConnected(matrix, r, c, visited) {
	const key = `${r},${c}`;
	if (visited[key]) {
		// Already seen, return 0
		return 0;
	}
	// mark visited
	visited[key] = true;

	// start a count
	let count = 1;

	// get the valid neighbors for this cell
	const neighbors = getNeighbors(matrix, r, c);

	// loop over the neighbors and recurse to get neighbor's neighbors
	for (let n of neighbors) {
		count += getConnected(matrix, n[0], n[1], visited);
	}

	// return the count
	return count;
}

// Helper function to get the neighbors of a given cell
function getNeighbors(matrix, r, c) {
	// Current cell color
	const COLOR = matrix[r][c];
	// Possible directions to move
	const POINTS = [
		[0, 1],
		[1, 0],
		[-1, 0],
		[0, -1]
	];
	const neighbors = [];
	POINTS.forEach(point => {
		// Determine if neighbor is in valid range and is a matching color
		const newRow = r + point[0];
		const newCol = c + point[1];
		if (
			newRow >= 0 &&
			newRow < matrix.length &&
			newCol >= 0 &&
			newCol < matrix[newRow].length &&
			matrix[newRow][newCol] === COLOR
		) {
			neighbors.push([newRow, newCol]);
		}
	});
	return neighbors;
}
