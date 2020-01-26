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
