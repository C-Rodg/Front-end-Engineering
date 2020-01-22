function isBalanced(node) {
	// No node is considered balanced
	if (!node) {
		// Tuple contains: isBalanced, tree height
		return [true, 0];
	}

	// Check if left and right are balanced and get their heights
	const [leftBalanced, leftHeight] = isBalanced(node.left);
	const [rightBalanced, rightHeight] = isBalanced(node.right);

	// Check if left is balanced, right is balanced, and that the height difference <= 1
	if (
		leftBalanced &&
		rightBalanced &&
		Math.abs(leftHeight - rightHeight) <= 1
	) {
		return [true, Math.max(leftHeight, rightHeight) + 1];
	} else {
		return [false, Math.max(leftHeight, rightHeight) + 1];
	}
}
