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

// -------- IMPLEMENTATION #2 ---------- //
// Use a priority queue (binary heap)!

// PSUEDOCODE:  3 objects - PriorityQueue, 'previous', 'distances'
// 1.) Create the graph structure
//  using addVertex(v) and addEdge(v1, v2, weight)
// 2.) Function should accept a start and end vertex
// 3.) Create object, 'distances', with each vertex
// in Adjacency List as a key and the value initialized
// to infinity - except start which = 0.
// 4.) After adding to 'distances', add each vertex with
// a priority of Infinity to Priority Queue, except start which = 0
// 5.) Create object, 'previous' and set each key to be every vertex
// with an initial value of null
// 6.) Loop as long as there are items in the Priority Queue
//	- dequeue a vertex from priority queue (get smallest distance)
//	- if vertex = end vertex, we are done!
// 	- otherwise loop through each value in the adjacency list at that vertex
// 		- calculate distance to that vertex from start
// 		- if distance is less than currently stored in our 'distances' object
//			- update the "distances" object with new lower distance
//			- update the "previous" object to contain that vertex
//			- enqueue the vertex with the total distance from the start node

// The 'previous' hashmap gives the shortest distance from start to any node actually

class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}

	shortestPath(start, finish) {
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};

		// Build tracking objects (steps 3-5)
		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}

			previous[vertex] = null;
		}

		// Loop through nodes (step 6)
		let smallest;
		const path = [];
		while (nodes.length > 0) {
			// Get the smallest value
			smallest = nodes.dequeue().val;
			if (vertex === finish) {
				// Done! Build path to return
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}

			if (smallest || distances[smallest] !== Infinity) {
				for (let neighbor in this.adjacencyList[smallest]) {
					let currentNeighbor = this.adjacencyList[smallest][neighbor];
					// Calculate new distance to neighboring node
					let currentDistance = distances[smallest] + currentNeighbor.weight;
					if (currentDistance < distances[currentNeighbor.node]) {
						// Since new distance is smaller, update previous and distances objects
						distances[currentNeighbor.node] = currentDistance;
						previous[currentNeighbor.node] = smallest;
						nodes.enqueue(currentNeighbor.node, currentDistance);
					}
				}
			}
		}
		// While loop breaks before start value is added, so be sure to add!
		return path.concat(smallest);
	}
}
