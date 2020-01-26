function detectCycleUndirected(adjList) {
	// Track our visits
	const visited = {};

	// Loop over the vertices
	for (let v of Object.keys(adjList)) {
		if (!visited[v]) {
			// Check from this vertex to see if there is a cycle.
			// Since we aren't coming from a certain node, parent is null
			if (isCycle(v, adjList, visited, null)) {
				return true;
			}
		}
	}

	// Completed DFS, no cycle exists
	return false;
}

//
function isCycle(v, adjList, visited, parent) {
	// Mark this vertex as now visited
	visited[v] = true;

	// Loop through the neighbors of this vertex
	for (let n of adjList[v]) {
		if (!visited[n]) {
			// Recursively check for cycles, but track the node we are coming from (parent)
			if (isCycle(n, adjList, visited, v)) {
				return true;
			}
		} else if (parent !== n) {
			// If we have visited this node, but it isn't the parent then it must be a cycle
			return true;
		}
	}

	// Done with DFS, no cycle found for this vertex
	return false;
}
