// Given an undirected graph, determine if a cycle exists in the graph.

// Input:
const graph = {
	a: ['b', 'c'],
	b: ['a'],
	c: ['a']
};
// Output: false

// Input:
const graph2 = {
	a: ['b', 'c'],
	b: ['a', 'c'],
	c: ['a', 'b']
};
// Output: true

// Hint 1: DFS

// Hint 2: Think about what we need to track in each set of recursion..

// Hint 3: An undirected graph vertex will always contain it's neighbor in both directions, but this doesn't mean it's a cycle..
