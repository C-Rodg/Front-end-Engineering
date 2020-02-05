// More common brute force method
function nQueens(n) {
	// Create the chessboard
	const grid = Array(n)
		.fill(null)
		.map(() => Array(n).fill(0));

	// Track the results
	const results = [];

	// Helper function for checking valid moves
	function isValidMove(grid, row, col) {
		const diagonal1 = row + col;
		const diagonal2 = row - col;
		for (let r = 0; r < grid.length; r++) {
			for (let c = 0; c < grid[r].length; c++) {
				if (grid[r][c] === 1) {
					const newD1 = r + c;
					const newD2 = r - c;
					if (
						diagonal1 === newD1 ||
						diagonal2 === newD2 ||
						r === row ||
						c === col
					) {
						return false;
					}
				}
			}
		}
		return true;
	}

	// Recursive function
	function solve(queen, pos) {
		// We have successfully placed all queens, mark this as a solution
		if (queen === n) {
			results.push([...pos]);
			return;
		}

		const currentRow = queen;
		// Loop through the columns trying to find a valid spot to place the queen
		for (
			let currentCol = 0;
			currentCol < grid[currentRow].length;
			currentCol++
		) {
			if (isValidMove(grid, currentRow, currentCol)) {
				// Recurse
				grid[currentRow][currentCol] = 1;
				pos.push([currentRow, currentCol]);
				solve(queen + 1, pos);
				// then Backtrack
				grid[currentRow][currentCol] = 0;
				pos.pop();
			}
		}
	}
	solve(0, []);

	// return the solutions
	return results;
}

// This is the optimized solution using arrays to track positions
function optimizedNQueens(n) {
	// track results
	const results = [];

	// Efficiently track placements
	const diagonal_asc = Array(n * 2 - 1).fill(true);
	const diagonal_desc = Array(n * 2 - 1).fill(true);
	const col = Array(n).fill(true);

	// recursive function
	function solve(queen, colArr, diagonalAscArr, diagonalDescArr, pos) {
		if (pos.length === n) {
			results.push([...pos]);
			return;
		}

		const currentRow = queen;
		for (let col = 0; col < n; col++) {
			const d1 = currentRow + col;
			const d2 = currentRow - col;
			// Ensure we are okay in each of the 3 arrays we are tracking
			if (colArr[col] && diagonalAscArr[d1] && diagonalDescArr[d2]) {
				// Update our tracking arrays
				colArr[col] = false;
				diagonalAscArr[d1] = false;
				diagonalDescArr[d2] = false;
				pos.push([currentRow, col]);
				// recurse
				solve(queen + 1, colArr, diagonalAscArr, diagonalDescArr, pos);

				// backtrack
				colArr[col] = true;
				diagonalAscArr[d1] = true;
				diagonalDescArr[d2] = true;
				pos.pop();
			}
		}
	}

	// Call the function
	solve(0, col, diagonal_asc, diagonal_desc, []);

	// return results
	return results;
}
