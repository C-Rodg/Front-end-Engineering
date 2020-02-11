function canFinishCourses(numCourses, preReqs) {
	// Build the adjacency matrix of course as key and prereqs as key values
	const matrix = {};
	for (let edge of preReqs) {
		const vtx = edge[0];
		if (!matrix[vtx]) {
			matrix[vtx] = [];
		}
		matrix[vtx].push(edge[1]);
	}

	// Track currently visited nodes
	const visited = new Set();

	// Recursive function to be called for DFS
	function hasCycle(vertex) {
		// Add the node to visited
		visited.add(vertex);

		// Go through neighbors and check if those neighbors
		// have already been visited or lead to cycles themselves
		for (let neighbor of matrix[vertex]) {
			if (visited.has(neighbor) || hasCycle(neighbor)) {
				return true;
			}
		}
		// Remove the node from visited
		visited.remove(vertex);
		return false;
	}

	// Loop through each node and check if there is a cycle
	// Could also use Object.keys(matrix) if it's not sequential...
	for (let i = 0; i < numCourses; i++) {
		if (hasCycle(i)) {
			return false;
		}
	}
	return true;
}

// Another way to detect cycles in a direct graph is
// to use the white-grey-black approach:

// Think of it as unvisited (the nodes you go through),
// currently visiting (the nodes you check to see if already exists = cycle)
// and visited (the nodes you've completely explored all of their neighbors).
function detectCycle(matrix) {
	// Create sets
	const white = new Set(); // unvisited
	const grey = new Set(); // visiting
	const black = new Set(); // visited

	// Add to unvisited set
	for (let vtx of Object.keys(matrix)) {
		white.add(vtx);
	}

	// Go through all white unvisited nodes
	for (let vtx of Object.keys(matrix)) {
		if (white.size === 0) {
			break;
		}
		if (dfs(vtx, white, grey, black)) {
			return true;
		}
	}

	// Recursive function to be called
	function dfs(curr, white, grey, black) {
		// move the current from white to grey
		// aka unvisited to currently visiting
		white.delete(curr);
		grey.add(curr);

		for (let neighbor of matrix[curr]) {
			if (black.has(neighbor)) {
				// already has been fully explored
				continue;
			}
			if (grey.has(neighbor)) {
				// cycle found!
				return true;
			}
			// Continue to explore the neighbors
			if (dfs(neighbor, white, grey, black)) {
				return true;
			}
		}

		// move the current from grey to black
		// aka from currently visiting to visited fully
		grey.delete(curr);
		black.add(curr);

		// No cycle found for this vertex
		return false;
	}

	return false;
}

// Detect a cycle in an undirected graph
function detectCycleUndirected(matrix) {
	const visited = new Set();
	for (let vtx of Object.keys(matrix)) {
		if (visited.has(vtx)) {
			// we've already visited this node
			continue;
		}

		const hasCycle = detectCycleHelper(vtx, visited, null);
		if (hasCycle) {
			// Cycle detected
			return true;
		}
	}

	// Recursive helper function
	function detectCycleHelper(vertex, visited, parent) {
		// Mark vertex as visited
		visited.add(vertex);

		// Loop through edges
		for (let neighbor of matrix[vertex]) {
			if (!visited.has(neighbor)) {
				// If we have not visited this neighbor, check if there is a potential cycle
				if (detectCycleHelper(neighbor, visited, vertex)) {
					return true;
				}
			} else if (neighbor !== parent) {
				// This neighbor is marked as visited and is not the parent, so must be a cycle
				return true;
			}
		}

		// No cycle detected
		return false;
	}

	// No cycle detected
	return false;
}
