// The game of Go requires a player to
// surround another players pieces on a board
// to score.  The two team colors are black & white.
// Pieces may also be empty if nothing has been placed yet.

// You are given a partially played board
// and a spot to place a new black stone.
// Determine the number of enemy stones
// that this move will capture.

function playGo(board, newRow, newCol) {
	return Number;
}

// Input:
const newPlace = [3, 3];
const board = [
	['e', 'e', 'w', 'e', 'e'],
	['b', 'b', 'b', 'b', 'b'],
	['e', 'b', 'w', 'w', 'b'],
	['w', 'b', 'b', 'E', 'b'],
	['e', 'e', 'w', 'w', 'e']
];
// Output: 2 pieces will be surrounded

// Hint 1: DFS

// Hint 2: Place piece, do DFS from each 'w'

// Hint 3: Don't be afraid to be destructive

// Hint 4: Think about base cases - 'b', 'e', out of bounds?
