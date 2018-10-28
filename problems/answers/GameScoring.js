function gameScoring(score) {
	const scoreValues = [1, 2, 4];

	// Initialize solutions
	const solutions = Array(score + 1).fill(0);

	// Solve base case
	solutions[0] = 1;

	// Loop through each of the possible score values
	for (let scoreIdx = 0; scoreIdx < scoreValues.length; scoreIdx++) {
		const currentScore = scoreValues[scoreIdx];

		for (let j = currentScore; j < score + 1; j++) {
			solutions[j] = solutions[j] + solutions[j - currentScore];
		}
	}
	return solutions[score];
}

// How this plays out for score = 13

// solutions = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];  // length of 14 (score + 1)

// for currentScore = 1...
// ---for 'j' in 1 -> 14
// ---solution[1] = solution[1] (0) + solution[1 - 1] (1) = 1
// ---solution[2] = solution[2] (0) + solution[2 - 1] (1) = 1
// ---solution[3] = solution[3] (0) + solution[3 - 1] (1) = 1
// ---solution[13] = solution[13] (0) + solution[13 -1] (1) = 1

// solutions = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// for currentScore = 2...
// ---for 'j' in 2 -> 14
// ---solution[2] = solution[2] (1) + solution[2 - 2] (1) = 2
// ---solution[3] = solution[3] (1) + solution[3 - 2] (1) = 2
// ---solution[4] = solution[4] (1) + solution[4 - 2] (2) = 3
// ---solution[13] = solution[13] (1) + solution[13 - 2] (6) = 7

// solutions = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

// for currentScore = 4...
// ---for 'j' in 4 -> 14
// ---solution[4] = solution[4] (3) + solution[4 - 4] (1) = 4
// ---solution[5] = solution[5] (3) + solution[5 - 4] (1) = 4
// ---solution[6] = solution[6] (4) + solution[6 - 4] (2) = 6
// ---solution[13] = solution[13] (7) + solution[13 - 4] (9) = 16

// solutions = [1, 1, 2, 2, 4, 4, 6, 6, 9, 9, 12, 12, 16, 16]

// return solutions[score] -> 16
