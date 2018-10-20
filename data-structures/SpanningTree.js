// A spanning tree of a connected, undirected graph
// is a subgraph that is a tree that connects all of the
// vertices together.

// A graph with 'n' vertices has a spanning graph of n-1

// Prim's Algorithm is used to find minimum spanning trees and is as follows:
// - initialize the MST with a vertex
// - find the minimum weight edge from the constructed graph to a vertex not yet added to the graph
// - add that edge and vertex to the MST
// - repeat until all vertexes have been visited

// Runtime: O(n^2) - but can be improved by using a heap

class GraphMST {
	constructor(g = [], e = []) {
		this.g = g;
		this.e = e;
	}

	findMST() {
		let vertexCount = 0;
		let weight = 0;

		// Add first vertex
		let current = this.g[0];
		current.visited = true;
		vertexCount++;

		// Construct the remaining MST
		// using the smallest weighted edge
		while (vertexCount < this.g.length) {
			let smallest = null;

			// Finding -
			// unvisited edge and
			// unvisted destination vertex
			for (let i = 0; i < this.e.length; i++) {
				if (this.e[i].visited === false && this.e[i].dest.visited === false) {
					smallest = this.e[i];
					break;
				}
			}

			// Finding -
			// unvisted edge and
			// visited source node and
			// unvisited destination node and
			// a weight smaller than smallest weight
			for (let i = 0; i < this.e.length; i++) {
				if (this.e[i].visited === false) {
					if (
						this.e[i].src.visited === true &&
						this.e[i].dest.visited === false &&
						this.e[i].weight < smallest.weight
					) {
						smallest = this.e[i];
					}
				}
			}

			// Mark visited
			smallest.visited = true;
			smallest.defaultStatus.visited = true;
			weight += smallest.weight;
			vertexCount++;
		}

		return weight;
	}
}
