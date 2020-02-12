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

// Variant question.  Given a node, find the inorder successor
function inorderSuccessorFromNode(node) {
	if (node.right) {
		// If it has a right node, find it's minimum
		let curr = node.right;
		while (curr.left) {
			curr = curr.left;
		}
		return curr;
	}

	// Continue up the parents until you find the one greater than node
	let parent = node.parent;
	while (parent && parent.val < node.val) {
		parent = parent.parent;
	}
	return parent;
}
