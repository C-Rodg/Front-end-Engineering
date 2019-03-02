// TOPICS: AVL Tree, Red-Black Tree, 2-3 Tree

// ---------------------------------------- //
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

// ---------------------------------------- //
// Red-black tree
// A similar data structure to an AVL tree is a Red-Black tree.

// The rules for a red-black tree are as follows:
// - every node is either red or black
// - two red nodes cannot be adjacent (vertically) - i.e. a red parent cannot have any red child nodes
// - the root is always black
// - the color of null nodes is considered black
// - each path from the root to null contains the same amount of black nodes

// AVL trees are more 'balanced', but this data structure is more efficient
// than AVL trees if there is constant insertion/deletion.  So if just searching, use an AVL tree.

// Insertion:
// - insert the new node using standard BST techniques and color it red
// - if it is the root, color it black.

// Rebalancing (two ways):
// 1.) Recolor the nodes
// 2.) Rotating the nodes left/right

// ---------------------------------------- //
// 2-3 tree

// - all leaves are the same height.
// - each internal node can have 2 or 3 children.
// - each node can have 1 (x) or 2 (y) keys.
// - - If 1, then leftChild.key < X < rightChild.key.
// - - If 2, then leftChild.key < X < middleChild.key < Y < rightChild.key
