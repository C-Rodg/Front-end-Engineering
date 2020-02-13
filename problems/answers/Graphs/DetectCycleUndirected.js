// ------- Slimmed Down version --------- //
function undirectedGraphHasCycle(adjList, startVertex) {
	// Track visits
	const visited = {};
	// Pass in the current vertex, the parents vertex, the matrix, and track visits
	return hasUnCycle(startVertex, null, adjList, visited);
}

function hasUnCycle(curr, parent, adjList, visited) {
	// Mark visited
	visited[curr] = true;

	// Loop through the neighbors
	for (let n of adjList[curr]) {
		if (!visited[n]) {
			// we haven't visited this neighbor, so check if a cycle exists
			if (hasUnCycle(n, curr, adjList, visited)) {
				return true;
			}
		} else if (visited[n] && n !== parent) {
			// We have already visited this node and it isn't the parent
			return true;
		}
	}

	// No cycle detected, return false
	return false;
}

// More complicated version, that has no start node
function detectCycleUndirected(adjList) {
	// Track our visits
	const visited = {};

	// Loop over the vertices
	// Note: this probably isn't needed if you have a starting vertice
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

// Perform DFS
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
