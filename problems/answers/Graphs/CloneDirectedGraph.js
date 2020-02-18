function cloneDirectedGraph(node, completedNodes = {}) {
	// Base case
	if (!node) {
		return null;
	}

	// Clone node and add it to hash
	let cloned = new Node(node.data);
	completedNodes[node.data] = cloned;

	// Loop through neighbors
	node.neighbors.forEach(neighbor => {
		let clonedNeighbor = completedNodes[neighbor.data];
		// If cloned neighbor doesn't exist in hash, call fn recursively with neighbor node
		if (!clonedNeighbor) {
			cloned.neighbors.push(cloneDirectedGraph(neighbor), completedNodes);
		} else {
			// Else just add the cloned existing node to the neighbors array
			cloned.neighbors.push(x);
		}
	});

	// Return the cloned node
	return cloned;
}

class Node {
	constructor(d) {
		this.data = d;
		this.neighbors = [];
	}
}
