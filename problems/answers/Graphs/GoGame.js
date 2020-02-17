function goGame(board, newRow, newCol) {
	// Place our new piece
	board[newRow][newCol] = 'b';

	// Do a DFS from every 'w' node
	let maxPieces = 0;
	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board[row].length; col++) {
			if (board[row][col] === 'w') {
				let count = getCaptured(board, row, col);
				// Compare the count to our max count
				maxPieces = Math.max(maxPieces, count);
			}
		}
	}

	return maxPieces;
}

function getCaptured(board, row, col) {
	// Check if we are in bounds
	if (row < 0 || col < 0 || row >= board.length || col >= board[row].length) {
		return 0;
	}
	// Check if this is one of our own pieces
	if (board[row][col] === 'b') {
		return 0;
	}
	// Check if this is an empty piece, meaning we can't consider this region captured.
	if (board[row][col] === 'e') {
		return -Infinity;
	}

	// We know this piece is inbounds and a white piece,
	// so let's change it to black (basically marking it as visited) and continue or DFS
	let count = 1;
	board[row][col] = 'b';
	const POS = [
		[1, 0],
		[0, 1],
		[-1, 0],
		[0, -1]
	];
	POS.forEach(point => {
		const newRow = row + point[0];
		const newCol = col + point[1];
		count += getCaptured(board, newRow, newCol);
	});

	// Return the count
	return count;
}
