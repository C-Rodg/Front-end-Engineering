// AVL Tree
// Basically a binary search tree that is constantly balanced - |left height - right height| <= 1
// Constantly balanced means more efficient lookups than a skewed BST, but will take longer to insert/delete

// Balancing nodes:
// Node U - unbalanced node
// Node C - child of Node U
// Node G - grandchild of Node U

// Rotations:
// Left & Right

// Rotation cases:
// Left-Left: Node C is left child of Node U, Node G is left child of Node C
// Left-Right: Node C is left child of Node U, Node G is right child of Node C
// Right-Right: Node C is right child of Node U, Node G is right child of Node C
// Right-Left: Node C is right child of Node U, Node G is left child of Node C

// Deletion
// Delete as normal like with a BST, but then traverse upwards finding unbalanced nodes and rotating
