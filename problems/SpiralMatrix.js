// Write a function that takes a number 'n' and returns
// a nXn size integer matrix
// Input: spiralMatrix(3)
// Output:
// [ [1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5] ]

function spiralMatrix(n) {
	const result = [];

	// Create array of arrays
	for (let i = 0; i < n; i++) {
		result.push([]);
	}

	let counter = 1;
	let startRow = 0,
		endRow = n - 1,
		startCol = 0,
		endCol = n - 1;

	while (startRow <= endRow && startCol <= endCol) {
		for (let a = startCol; a <= endCol; a++) {
			result[startRow][a] = counter;
			counter++;
		}
		startRow++;

		for (let b = startRow; b <= endRow; b++) {
			result[b][endCol] = counter;
			counter++;
		}
		endCol--;

		for (let c = endCol; c >= startCol; c--) {
			result[endRow][c] = counter;
			counter++;
		}
		endRow--;

		for (let d = endRow; d >= startRow; d--) {
			result[d][startCol] = counter;
			counter++;
		}
		startCol++;
	}

	return result;
}
