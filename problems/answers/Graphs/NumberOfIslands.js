function numberOfIslands(grid) {
	let islands = 0;

	// Loop through each row and col
	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[r].length; c++) {
			if (grid[r][c] === 1) {
				// Island found. Sink it.
				islands += 1;
				sinkIsland(grid, row, col);
			}
		}
	}

	return islands;
}

// Recursive function that destroys the islands in the grid
function sinkIsland(grid, row, col) {
	if (grid[row][col] !== 1) {
		return;
	}

	// Sink this cell
	grid[row][col] = 0;

	// Get this island's neighbors and sink those as well
	const neighbors = getNeighbors(grid, row, col);
	for (let n of neighbors) {
		sinkIsland(grid, n[0], n[1]);
	}
}

// Helper function to get valid island neighbors for a particular cell
function getNeighbors(grid, row, col) {
	const neighbors = [];

	// Valid positions are up, down, left, and right
	const POSITIONS = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1]
	];

	POSITIONS.forEach(position => {
		const newRow = position[0] + row;
		const newCol = position[1] + col;

		// Make sure it is inbounds AND an island
		if (
			newRow >= 0 &&
			newCol >= 0 &&
			newRow < grid.length &&
			newCol < grid[newRow].length &&
			grid[newRow][newCol] === 1
		) {
			neighbors.push([newRow, newCol]);
		}
	});

	return neighbors;
}
