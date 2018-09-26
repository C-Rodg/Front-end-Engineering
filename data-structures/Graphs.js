// Nodes + Connections

// TERMINOLOGY:
// Vertex - a node
// Edge - connection between nodes
// Weighted / Unweighted - edges assigned value vs. edges all equal
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
