// Nodes + Connections

// TERMINOLOGY:
// Vertex - a node
// Edge - connection between nodes
// Weighted / Unweighted - edges assigned value vs. edges all equal
// *** For weighted graphs see Dijkstras.js
// Directed / Undirected - two way connections vs. only one way connections

// COMMON STORAGE STRUCTURES:

// Adjacency Matrix:
// create a table with rows and cols as
// nodes and 0/1's representing connections

// - takes up more space (in sparce graphs)
// - slower to iterate over all edges
// - faster to lookup a specific edge

//  A-B-C
// A1-0-1
// B0-1-1
// C1-1-1

// Adjacency Lists:
// Create an array (or hash table) where index 'i' stores an
// array of nodes it connects to
// ONLY STORES EDGES, BETTER FOR LARGE NODE SETS (like most realworld data)

// - can take up less space
// - faster to iterate over edges
// - can be slower to lookup a specific edge

[
	[1, 5], // 0 node
	[0, 2], // 1 node
	[1, 3] // 2 node
];

// RUNTIME:
// V = number of vertices (nodes)
// E = number of edges (connections)

// -------------AList-------AMatrix
// Add Vertex   O(1)        O(V^2)
// Add Edge     O(1)        O(1)
// Remove Vertex O(V+E)     O(V^2)
// Remove Edge  O(E)        O(1)
// Query        O(V+E)      O(1)
// Storage      O(V+E)      O(V^2)

class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	// Add a node
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	// Add connections
	addEdge(v1, v2) {
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}

	// Remove edge from each node
	removeEdge(v1, v2) {
		this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
	}

	// Remove a vertex - must remove all connected edges
	removeVertex(vertex) {
		this.adjacencyList[vertex].forEach(connectedVertex => {
			this.removeEdge(vertex, connectedVertex);
		});
		delete this.adjacencyList[vertex];
	}

	// Recursive depth-first search
	dfsRecursive(startVertex) {
		const result = [];
		const visited = {};

		// could also make this an IIFE
		const traverse = vertex => {
			if (!vertex) {
				return;
			}
			visited[vertex] = true;
			result.push(vertex);
			this.adjacencyList[vertex].forEach(neighbor => {
				if (!visited[neighbor]) {
					return traverse(neighbor);
				}
			});
		};
		traverse(startVertex);
		return result;
	}

	// DFS Iterative - uses a stack
	dfsIterative(startVertex) {
		const nodes = [startVertex];
		const visited = {};
		const results = [];
		while (nodes.length > 0) {
			let current = nodes.pop();
			visited[current] = true;
			results.push(current);
			this.adjacencyList[current].forEach(neighbor => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					nodes.push(neighbor);
				}
			});
		}
		return results;
	}

	// BFS Recursive - uses a queue
	bfsIterative(startVertex) {
		const visited = {};
		const results = [];
		const nodes = [startVertex];
		let current;
		visited[startVertex] = true;
		while (nodes.length > 0) {
			current = nodes.shift();

			results.push(current);
			this.adjacencyList[current].forEach(neighbor => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					nodes.push(neighbor);
				}
			});
		}

		return results;
	}
}
