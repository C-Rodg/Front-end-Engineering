// Attempt to start a 'word' from each point in the grid by doing DFS from each spot.
// One way of really speeding this up is to have a stronger bounding function
// that might use a Trie to see if the 'wordSoFar' exists and if it doesn't backtracking then.

function boggle(grid, dictionary) {
    const results = new Set();

    // Attempt to start a word from every location
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[r].length; c++) {
            findWord(grid, r, c, "", {}, results, dictionary)
        }
    }

    return results;
}

// Recursive helper providing DFS
function findWord(grid, r, c, str, visited, results, dictionary) {
    const key = `${r},${c}`;
    if (visited[key]) {
        // We've already visited this letter, so bail
        return;
    }

    // Create the word so far and mark it visited
    const wordSoFar = str + grid[r][c];
    visited[key] = true;

    // Check if the word so far is a valid word
    if (dictionary.has(wordSoFar)) {
        results.add(wordSoFar);
    }

    // Get the possible neighbors of the current letter
    const neighbors = getNeighbors(grid, r, c);
    for(let n of neighbors) {
        findWord(grid, n.row, n.col, wordSoFar, visited, results, dictionary);)
    }

    // Backtrack and mark this as no longer visited
    visited[key] = false;
}

// Helper function to get neighbors
function getNeighbors(grid, r, c) {
    const neighbors = [];

    // Left/Right/Up/Down/Diagonal positions
    const POS = [[1,0], [0,1], [-1,0], [0,-1], [-1,-1], [-1,1], [1,-1], [1,1]];

    POS.forEach(point => {
        const newRow = r + point[0];
        const newCol = c + point[c];

        // Verify it's in bounds
        if (newRow >= 0 && newCol >= 0 && newRow < grid.length && newCol < grid[newRow].length) {
            neighbors.push({
                row: newRow,
                col: newCol
            });
        }
    });

    // return the neighbors
    return neighbors;
}