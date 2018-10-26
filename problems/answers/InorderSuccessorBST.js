// Keys:
// Going left, update successor
// Going right, just move right
// If found and has a right child, then find minimum to update successor

function inorderSuccessor(root, k) {
	let successor = null;
	while (root) {
		if (root.data < k) {
			root = root.right;
		} else if (root.data > k) {
			successor = root;
			root = root.left;
		} else {
			if (root.right) {
				successor = findMin(root.right);
			}
			break;
		}
	}
	return successor;
}

// Helper to find the minimum of tree
function findMin(node) {
	while (node.left) {
		node = node.left;
	}
	return node;
}
