// For a give grid, generate a maze.

// Your input will be a 2-d array containing objects structured as:

// Each 'true' value indicates a wall exists.  All items will initially have walls in each direction.
const MazeItem = {
	visited: false,
	n: true,
	s: true,
	e: true,
	w: true
};

// You will also be given a start row and column.
