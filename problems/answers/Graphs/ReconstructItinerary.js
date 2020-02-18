function reconstruct(tickets, start) {
	// Create a graph
	const adjList = {};
	tickets.forEach(ticket => {
		if (!adjList[ticket[0]]) {
			adjList[ticket[0]] = [];
		}
		// Key = from, values = to
		adjList[ticket[0]].push(ticket[1]);
	});

	// Sort the destinations
	for (let k of Object.keys(adjList)) {
		adjList[k].sort();
	}

	// Recursive function that backtracks to get proper itenerary
	function dfs(place, counter) {
		if (counter === 0) {
			// We've used all tickets
			return true;
		}
		const neighbors = adjList[place];
		if (!neighbors || neighbors.length === 0) {
			// We've hit a dead end and we still have tickets to use
			return false;
		}

		for (let n of neighbors) {
			results.push(n);
			counter -= 1;
			// recurse using this neighbor route
			if (dfs(n, counter)) {
				return true;
			}

			// backtrack
			counter += 1;
			results.pop();
		}

		// No path found
		return false;
	}
	// Initialze the return results with the start node
	const results = [start];
	if (dfs(start, tickets.length)) {
		return results;
	} else {
		return []; // no path exists
	}
}
