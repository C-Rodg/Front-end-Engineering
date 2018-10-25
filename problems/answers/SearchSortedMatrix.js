function searchSortedMatrix(matrix, k) {
	let row = 0;
	let col = matrix[0].length - 1;

	while (row < matrix.length && col >= 0) {
		const value = matrix[row][col];
		if (value < k) {
			col--;
		} else if (value > k) {
			row++;
		} else {
			return [row, col];
		}
	}
	return [-1, -1];
}
