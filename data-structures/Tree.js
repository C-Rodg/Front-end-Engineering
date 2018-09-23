// Tree

// Graphs
// Undirected - no direction, two nodes with a connecting edge = neighbors
// Directed - is a direction.  Node A can be neighbor of Node B, while Node B is not a neighbor of Node A
// Weighted - each edge contains a weight
// Cyclic - has cycles.  Undirected graph has nodes with edges pointing to eachother (that's a cycle)
// -- use Dijkstra's Algorithm to determine shortest path by weight
// ** Must be aware of circular dependcies, so mark item as 'searched'

// Trees or graphs can be used interchangably here.  An example graph implementation might look like:
// const graph = {};
// graph["you"] = ["john", "tim", "mike"]
// graph["mike"] = ["taylor", "jill"]
// ...

// Breadth-First Search (BFS)
// * Breadth Back Queue (bbq)
// - Very wide trees will require lots of memory
// - Takes O(V+E) time (vertices/edges)
// -- Anytime you hear 'width'..
// -- Solves is there a path from Node A -> Node B for unweighted
// -- Solves the shortest path problem

// Depth-First Search (DFS)
// * Depth Front Stack
// - Very tall trees will require lots of memory
// TYPES of DFS: 1 -> 2 / 3 -> 4 /5 (of 2)
// (a) Inorder (Left, Root, Right) : 4 2 5 1 3
// (b) Preorder (Root, Left, Right) : 1 2 4 5 3
// (c) Postorder (Left, Right, Root) : 4 5 2 3 1

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		this.children.push(new Node(data));
	}

	remove(data) {
		this.children = this.children.filter(n => n.data !== data);
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	traverseBF(fn) {
		const arr = [this.root];
		while (arr.length) {
			const currentNode = arr.shift();
			arr.push(...currentNode.children);
			fn(currentNode);
		}
	}

	traverseDF(fn) {
		const arr = [this.root];
		while (arr.length) {
			const currentNode = arr.shift();
			arr.unshift(...currentNode.children);
			fn(currentNode);
		}
	}

	searchBF(item) {
		const searched = {};
		const arr = [this.root];
		while (arr.length) {
			const currentNode = arr.shift();
			if (currentNode.data === item) {
				return currentNode;
			}
			// Added to prevent cyclical trees from looping
			const k = JSON.stringify(currentNode);
			if (!searched[k]) {
				arr.push(...currentNode.children);
				searched[k] = true;
			}
		}
		return null;
	}

	searchDF(item) {
		const arr = [this.root];
		while (arr.length) {
			const currentNode = arr.shift();
			if (currentNode.data === item) {
				return currentNode;
			}
			arr.unshift(...currentNode.children);
		}
		return null;
	}
}

// Count Tree Width function
// uses BFS
function countTreeWidths(tree) {
	const counters = [0];
	// Use 's' as the splitter of levels
	const nodes = [tree.root, 's'];
	while (nodes.length > 1) {
		const currentNode = nodes.shift();
		if (currentNode === 's') {
			counters.push(0);
			nodes.push('s');
		} else {
			counters[counters.length - 1] += 1;
			counters.push(...currentNode.children);
		}
	}
	return counters;
}
