// Recursive solution
function findNode(a, b, n) {
	// We are in the correct position in both trees
	if (a === n) {
		return b;
	}

	// Recursively explore left
	if (a.left && b.left) {
		let found = findNode(a.left, b.left, n);
		if (found) {
			return found;
		}
	}

	// Recursively explore right
	if (a.right && b.right) {
		let found = findNode(a.right, b.right, n);
		if (found) {
			return found;
		}
	}

	// Not found
	return null;
}

// Iterative solution
function findNodeIterative(a, b, n) {
	const stack = [[a, b]];

	// Perform DFS with stack
	while (stack.length) {
		const [aNode, bNode] = stack.pop();

		// Found the correct position in the tree
		if (aNode === n) {
			return bNode;
		}

		// Add children to stack
		if (aNode.left && bNode.left) {
			stack.push([aNode.left, bNode.left]);
		}
		if (aNode.right && bNode.right) {
			stack.push([aNode.right, bNode.right]);
		}
	}

	// Never found
	return null;
}
