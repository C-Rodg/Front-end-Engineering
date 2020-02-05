function reconstructItinerary(tickets, start) {
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

	// Recursive helper function for dfs
	const results = [];
	function dfs(place) {
		const destinations = adjList[place];
		while (destinations && destinations.length > 0) {
			dfs(destinations.shift());
		}
		results.push(place);
	}
	dfs(start);

	return results;
}
