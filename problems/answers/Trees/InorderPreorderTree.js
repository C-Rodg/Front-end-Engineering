function inorderPreorder(inorder, preorder) {
	// Track our position in the preorder
	let preorderIdx = 0;

	// Recursive function for building the tree
	function buildTree(inorderStart, inorderEnd) {
		if (inorderStart > inorderEnd) {
			return null;
		}

		// Create a node at the current preorder index and then increment the index
		const node = new Node(preorder[preorderIdx]);
		preorderIdx += 1;

		// Search for the newly created nodes position in inorder.  Once we find it we know the
		// values to the left are in it's left subtree and the values to it's right are in it's right subtree
		const nodeIndex = search(inorder, inorderStart, inorderEnd, node.val);

		// Build the left and right subtrees
		node.left = buildTree(inorderStart, nodeIndex - 1);
		node.right = buildTree(nodeIndex + 1, inorderEnd);

		// Return the node
		return node;
	}

	// Helper function for search for a node in the inorder array
	function search(arr, start, end, val) {
		for (let i = start; start < end + 1; i++) {
			if (arr[i] === val) {
				return i;
			}
		}
	}

	// Call the function and return the result;
	return buildTree(0, inorder.length - 1);
}
