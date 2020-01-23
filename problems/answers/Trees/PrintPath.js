// This helper function returns true or false depending on whether the path was found.
// It also modifies an array though to keep track of the path.
function hasPath(node, arr, x) {
	if (!node) {
		return false;
	}

	// Modify the path array
	arr.push(node.val);

	// We have found the path
	if (node.val === x) {
		return true;
	}

	// recursively visit left & right subtrees
	if (hasPath(node.left, arr, x) || hasPath(node.right, arr, x)) {
		return true;
	}

	// Unmodify the path array
	arr.pop();

	return false;
}

// Driver function
function printPath(root, x) {
	const path = [];
	if (hasPath(root, path, x)) {
		return path.join('->');
	}
	return 'No path found.';
}
