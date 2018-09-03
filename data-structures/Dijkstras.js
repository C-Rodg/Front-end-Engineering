// Dijkstra's Algorithm
// -- Solves shortest path for weighted graphs
// -- Can't use with negative weight edges (use Bellman Ford algo instead)
// 1.) Find the 'cheapest' node - the node you can get to in the lowest amount of time
// 2.) Update the costs of the neighbors of this node
// 3.) Repeat for every node in the graph
// 4.) Calculate the final path

// Implement with 3 hashmaps - the graph, the costs, and the parents
// Also should track 'processed' nodes
const graph = {
	start: { A: 5, B: 2 },
	A: { C: 4, D: 2 },
	B: { A: 8, D: 7 },
	C: { D: 6, finish: 3 },
	D: { finish: 1 },
	finish: {}
};

// Initial costs hash from start
const costs = {
	A: 5,
	B: 2,
	finish: Infinity
};

// Initial parents hash
const parents = {
	A: 'start',
	B: 'start',
	finish: null
};

// 1.) Head to Node B (cheapest) and recalculate costs
costs.D = 9; // 2 + 7
// don't update cost to A because 8 > current cost of 5

// 2.) Update 'processed nodes' and 'parents' hash

// Repeat...

// -------- IMPLEMENTATION ---------- //

// create a function that given 'costs' and 'processed'
// returns the cheapest node
function lowestCostNode(costs, processed) {
	return Object.keys(costs).reduce((acc, curr) => {
		if (acc === null || costs[curr] < costs[acc]) {
			if (!processed.includes(curr)) {
				acc = curr;
			}
		}
		return acc;
	}, null);
}

// Main function, takes the graph as a parameter
function dijkstra(graph) {
	// Create the 2 other supplementary graphs
	const costs = Object.assign({ finish: Infinity }, graph.start);
	const parents = { finish: null };

	for (let child in graph.start) {
		parents[child] = 'start';
	}

	const processed = [];

	// Get initial lowest cost node
	let node = lowestCostNode(costs, processed);
	while (node) {
		let cost = costs[node];

		// Get the neighbors of the current node
		let children = graph[node];

		// Loop through each neighbor and calculate the cost to reach that node
		// Only update the 'costs' object if it's cheaper or only available cost
		// Update the 'parents' object to be able to retrace our steps in the end
		for (let n in children) {
			let newCost = cost + children[n];
			if (!costs[n]) {
				costs[n] = newCost;
				parents[n] = node;
			}
			if (costs[n] > newCost) {
				costs[n] = newCost;
				parents[n] = node;
			}
		}
		// Mark as processed
		processed.push(node);

		// Get next lowest cost node
		node = lowestCostNode(costs, processed);
	}

	// We now have the lowest cost to reach the finish node
	let optimalPath = ['finish'];
	let parent = parents.finish;
	while (parent) {
		optimalPath.push(parent);
		parent = parents[parent];
	}

	// reverse array to get correct order
	optimalPath.reverse();

	const results = {
		distance: costs.finish,
		path: optimalPath
	};

	return results;
}
