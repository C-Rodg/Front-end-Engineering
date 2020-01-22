function getValuesAtHeight(node, k) {
	// Base case 1
	if (!node) {
		return [];
	}

	// Base case 2
	if (k === 1) {
		return [node.val];
	}

	return getValuesAtHeight(node.left, k - 1).concat(
		getValuesAtHeight(node.right, k - 1)
	);
}
