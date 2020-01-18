// Main recursive function
function generateMaze(maze, [row, col]) {
	const node = maze[row][col];
	node.visited = true;

	const randomDirections = getRandomDirections();
	randomDirections.forEach(direction => {
		const [rowDiff, colDiff] = getDirection(direction);
		if (
			maze[row + rowDiff] &&
			maze[row + rowDiff][col + colDiff] &&
			!maze[row + rowDiff][col + colDiff].visited
		) {
			// Tear down the wall in both directions
			maze[row][col][direction] = false;
			maze[row + rowDiff][col + colDiff][getOpposite(direction)] = false;
			generateMaze(maze, [row + rowDiff, col + colDiff]);
		}
	});
}

// Get the direction delta
function getDirection(direction) {
	if (direction === 'n') {
		return [-1, 0];
	} else if (direction === 's') {
		return [1, 0];
	} else if (direction === 'e') {
		return [0, 1];
	} else {
		return [0, -1];
	}
}

// Get opposite direction
function getOpposite(direction) {
	if (direction === 'n') {
		return 's';
	} else if (direction === 's') {
		return 'n';
	} else if (direction === 'e') {
		return 'w';
	} else {
		return 'e';
	}
}

// Function provided to you
function getRandomDirections() {
	return ['e', 'w', 'n', 's'];
}
