function uniquePaths(m, n) {
	// Create the data structure
	const grid = Array(m)
		.fill(null)
		.map(() => Array(n).fill(0));

	// Initialize the values we know.
	// We are setting these to one because there is only 1 way to get to each of these cells.
	for (let r = 0; r < m; r++) {
		grid[r][0] = 1;
	}
	for (let c = 0; c < n; c++) {
		grid[0][c] = 1;
	}

	// Fill out the rest of the grid by adding the top and left cells
	for (let row = 1; row < m; row++) {
		for (let col = 1; col < n; col++) {
			grid[row][col] = grid[row][col - 1] + grid[row - 1][col];
		}
	}

	return grid[row - 1][col - 1];
}
