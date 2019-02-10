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

// ------  New Version! Simpler! ----------- //
// 1.) Create matrix
// 2.) Initialize matrix with at least 1 row and 1 column
// 3.) Build matrix
const getEditDistance = (strA, strB) => {
	const table = [];

	// Initialize vertically
	for (let row = 0; row < strB.length + 1; row++) {
		table.push([0]);
	}

	// Initialize horizontally
	for (let col = 1; col < strA.length + 1; col++) {
		table[0][col] = 0;
	}

	// Add chars to beginning and end to match row/col to index -> max calculations easier
	strA = ' ' + strA;
	strB = ' ' + strB;

	for (let row = 1; row < strB.length + 1; row++) {
		const currentRowChar = strB[row];
		for (let col = 1; col < strA.length + 1; col++) {
			const currentColChar = strA[col];

			if (currentRowChar === currentColChar) {
				// Take TL diagonal and add 1
				table[row][col] = 1 + table[row - 1][col - 1];
			} else {
				// Take max of top and left
				table[row][col] = Math.max(table[row - 1][col], table[row][col - 1]);
			}
		}
	}

	// Have complete matrix now!
	const editDistance = table[strB.length - 1][strA.length - 1];

	// If we want to find the matching letters start in BR corner and work our way back up
	const substring = [];
	let col = strA.length - 1;
	for (let row = strB.length - 1; row > 0; row--) {
		const currentValue = table[row][col];
		if (
			currentValue !== table[row - 1][col] &&
			currentValue !== table[row][col - 1]
		) {
			// came from top left, so it is a match
			substring.push(strB[row]);
			row--;
			col--;
		} else if (currentValue === table[row - 1][col]) {
			// Came from above
			row--;
		} else {
			// Came from the left
			col--;
		}
	}
	return substring;
};
