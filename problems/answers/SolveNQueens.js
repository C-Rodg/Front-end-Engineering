// Recursive solution
function solveNQueens(n, solution, row, results) {
	// Base case
	if (row === n) {
		results.push(solution);
		return;
	}

	// Loop through columns and check for valid moves
	for (let i = 0; i < n; i++) {
		if (isValidMove(row, i, solution)) {
			solution[row] = i;
			solveNQueens(n, solution, row + 1, results);
		}
	}
}

// Helper to determine if it is a valid move
function isValidMove(proposedRow, proposedCol, solution) {
	const diagonalTLBR = proposedRow - proposedCol;
	const diagonalTRBL = proposedRow + proposedCol;

	// Loop through previous rows and check for conflicting queens
	for (let i = 0; i < proposedRow; i++) {
		const row = i;
		const col = solution[i];

		// DIAGONALS - found by matching -> row + col || row - col
		const oldDiagonalTLBR = row - col;
		const oldDiagonalTRBL = row + col;

		if (
			row === proposedRow ||
			col === proposedCol ||
			diagonalTLBR === oldDiagonalTLBR ||
			diagonalTRBL === oldDiagonalTRBL
		) {
			return false;
		}
	}

	return true;
}
