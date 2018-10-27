function editDistance(str1, str2) {
	const matrix = [];

	// Get size of matrix
	const endRow = str1.length + 1;
	const endCol = str2.length + 1;

	// Initialize col '0', row 'i'
	for (let i = 0; i < endRow; i++) {
		matrix.push([i]);
	}

	// Initialize row '0', col 'i'
	for (let i = 0; i < endCol; i++) {
		matrix[0][i] = i;
	}

	// Begin building the matrix by looping through the rows
	for (let r = 1; r < endRow; r++) {
		// Get current char from str1
		const currentCharStr1 = str1[r - 1];

		// For each row, continue building matrix by looping through the columns
		for (let c = 1; c < endCol; c++) {
			// Get current char from str2
			const currentCharStr2 = str2[c - 1];

			// Figure out the cost
			let cost = 1;
			if (currentCharStr1 === currentCharStr2) {
				cost = 0;
			}

			// Calculate the surround cell costs
			const topCellCost = matrix[r - 1][c] + 1;
			const leftCellCost = matrix[r][c - 1] + 1;
			const diagonalCost = matrix[r - 1][c - 1] + cost;

			matrix[r][c] = Math.min(topCellCost, leftCellCost, diagonalCost);
		}
	}

	// Return the bottom right value
	return matrix[endRow - 1][endCol - 1];
}
