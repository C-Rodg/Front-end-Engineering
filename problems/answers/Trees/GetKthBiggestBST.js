// Runtime O(n) where 'n' is the size of the tree
// Space: O(k) - we can use a queue to track last 'k' elements
// ... or can use a count to return only 'kth' value

// Tip: Use a reverse inorder traversal

function getKthBiggest(root, k) {
	// Use a global count variable
	let count = 0;

	// Traverse the tree in reverse inorder
	function traverse(node) {
		if (!node) {
			return;
		}

		let result = traverse(node.right);
		if (result) {
			// return the result if it's in the right subtree
			return result;
		}

		// Process the node, increment count, and return it if we found kth node
		count += 1;
		if (count === k) {
			return node;
		}

		result = traverse(node.left);
		if (result) {
			// return the result if it's in the left subtree
			return result;
		}

		// return undefined to prevent anything from being returned before we find k
	}

	return traverse(root);
}
