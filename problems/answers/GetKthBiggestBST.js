// Runtime O(n) where 'n' is the size of the tree
// Space: O(k) - we can use a queue to track last 'k' elements
// ... or can use a count to return only 'kth' value

// Tip: Use a reverse inorder traversal

function getKthBiggest(root, k) {
	let count = 0;
	function traverse(node) {
		if (!node) {
			return;
		}

		let result = traverse(node.right);
		if (result) {
			return result;
		}

		count += 1;
		if (count === k) {
			return node;
		}

		result = traverse(node.left);
		if (result) {
			return result;
		}
	}

	return traverse(root);
}
