// We use Primm's algorithm, which builds the tree one vertex
// at a time. It adds the minimum weighted edge from the tree
// being constructed to a vertex from the remaining vertices
// at each step.

function findMST(adjList) {
	// Note: adj list values are (node, weight)
	// 1.) Initialize the MST
	// 2.) Find the minimum weighted edge to a vertice not currently constructed
	// 3.) Add that edge to the MST
	// 4.) Repeat until all vertices have been added

	// Keep track of the vertices to visit
	const vertexKeys = Object.keys(adjList);

	// Keep track of already visited vertices
	const visited = {};

	// Initialize the mst
	const mst = new MST();

	// Remap the adjacency list to follow the format of [from, to, weight]
	for (let k of vertexKeys) {
		adjList[k] = adjList[k].map(currentEdgeTuple => {
			return [k, ...currentEdgeTuple];
		});
	}

	// Create a way to hold all available edges
	let availableEdges = [];

	// Loop through all vertexes
	for (let k of vertexKeys) {
		// Add edges to search through
		const currentEdges = adjList[k];
		availableEdges = [...availableEdges, ...currentEdges];

		let smallestEdge = null; // [from, to, weight]
		// Loop over all available edges and find the smallest valid edge
		for (let i = 0; i < availableEdges.length; i++) {
			const [edgeFrom, edgeTo, edgeWeight] = availableEdges[i];
			// Verify that we haven't gone to this node yet
			if (!visited[edgeTo]) {
				if (smallestEdge === null || edgeWeight < smallestEdge[2]) {
					smallestEdge = [edgeFrom, edgeTo, edgeWeight];
				}
			}
		}

		// If no smallest was found, we should just go to the next vertext
		if (!smallestEdge) {
			continue;
		}

		// We now have the smallest available edge.
		// Add it to the MST.

		// add the new vertex to the msg
		mst.addVertex(smallestEdge[1]);
		// add the new edge
		mst.addEdge(smallestEdge[0], smallestEdge[1], smallestEdge[2]);

		// Add this new nodes edges to the available edges
		const newNodeEdges = adjList[smallestEdge[1]];
		availableEdges = [...availableEdges, ...newNodeEdges];
		// Mark as visited
		visited[smallestEdge[0]] = true;
		visited[smallestEdge[1]] = true;

		// We could do some filtering on edges for already visited nodes
	}

	return mst;
}

class MST {
	constructor() {
		this.v = {};
	}

	// Creates the vertex and adds the edge
	addEdge(from, to, weight) {
		if (!this.v[from]) {
			this.v[from] = [];
		}
		if (!this.v[to]) {
			this.v[to] = [];
		}

		this.v[from].push([to, weight]);
		this.v[to].push([from, weight]);
	}
}
