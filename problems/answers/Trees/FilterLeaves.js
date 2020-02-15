function filterLeaves(node, n) {
	if (!node) {
		return null;
	}

	// Visit the left and right trees first (post order)
	node.left = filterLeaves(node.left, n);
	node.right = filterLeaves(node.right, n);

	// If it matches the filter value and it's a leaf node return none
	if (node.val === n && !node.left && !node.right) {
		return null;
	}

	return node;
}
