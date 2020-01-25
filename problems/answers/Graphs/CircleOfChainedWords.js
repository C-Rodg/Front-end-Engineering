function circleOfChainedWords(arr) {
	const matrix = {};
	// Create an adjacency list with the key the start character and the value the word
	for (let str of arr) {
		let startChar = str[0];
		if (!matrix[startChar]) {
			matrix[startChar] = [];
		}
		matrix[startChar].push(str);
	}

	return isCycle(matrix, arr[0], arr[0], arr.length, new Set());
}

// Cycle detection
function isCycle(matrix, currentWord, startWord, remaining, visited) {
	if (remaining === 1) {
		// One item remaining, so check the end of current word with beginning of start, which would form circle
		return currentWord[currentWord.length - 1] === startWord[0];
	}

	// Mark this word as visited
	visited.add(currentWord);

	// Get the last character as that will be used to link to the next word
	const nextChar = currentWord[currentWord.length - 1];

	// Loop through neighbors of nextChar, attempting to find the cycle (DFS)
	for (let neighbor of matrix[nextChar]) {
		if (!visited.has(neighbor)) {
			// we haven't visited this one yet, so recursively explore further
			return isCycle(matrix, neighbor, startWord, remaining - 1, visited);
		}
	}

	// Unmark word and return false for no cycle
	visited.delete(currentWord);
	return false;
}
