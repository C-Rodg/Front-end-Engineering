// Iterative solution
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

// Directional
class Grid {
	constructor(matrix) {
		this.matrix = matrix;
	}

	spiralPrint() {
		// Count the items to process
		let remainingItems = this.matrix.length * this.matrix[0].length;

		// Setup starting position
		let currentDirection = 'RIGHT';
		let currentPosition = [0, 0];
		let result = '';

		// While there are still items to process
		while (remainingItems > 0) {
			remaining -= 1;
			// Print the item
			result += this.matrix[currentPosition[0]][currentPosition[1]];

			// Destroy the item
			this.matrix[currentPosition[0]][currentPosition[1]] = null;

			// Get next position
			const nextPosition = this._getNextPosition(
				currentPosition,
				currentDirection
			);

			if (!this._isValidPosition(nextPosition)) {
				// If this is not a valid position, change direction
				currentDirection = this._getNextDirection(currentDirection);
				currentPosition = this._getNextPosition(
					currentPosition,
					currentDirection
				);
			} else {
				// else continue to the next position
				currentDirection = nextPosition;
			}
		}

		// return the result
		return result;
	}

	// Get the next direction
	_getNextDirection(dir) {
		return {
			RIGHT: 'DOWN',
			DOWN: 'LEFT',
			LEFT: 'UP',
			UP: 'RIGHT'
		}[dir];
	}

	// Get the next position coordinates
	_getNextPosition(currentPosition, currentDirection) {
		switch (currentDirection) {
			case 'RIGHT':
				return [currentPosition[0], currentPosition[1] + 1];
			case 'DOWN':
				return [currentPosition[0] + 1, currentPosition[1]];
			case 'LEFT':
				return [currentPosition[0], currentPosition[1] - 1];
			case 'UP':
				return [currentPosition[0] - 1, currentPosition[1]];
		}
	}

	// Check if this is a valid position
	_isValidPosition(position) {
		const [row, col] = position;
		// Check row out of bounds
		if (row < 0 || row >= this.matrix.length) {
			return false;
		}

		// Check col out of bounds
		if (col < 0 || col >= this.matrix[row].length) {
			return false;
		}

		// Check if already seen cell
		if (!this.matrix[row][col]) {
			return false;
		}

		return true;
	}
}
