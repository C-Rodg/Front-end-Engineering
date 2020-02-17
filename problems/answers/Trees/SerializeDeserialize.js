function serialize(root) {
	const result = [];
	// do a PreOrder traversal of the tree
	function serializeHelper(node) {
		if (!node) {
			result.push(null);
			return;
		}
		// Visit the current node
		result.push(node.val);

		// Visit the left & right nodes
		serializeHelper(node.left);
		serializeHelper(node.right);
	}

	// run the helper
	serializeHelper(root);

	// clear the nulls at the end
	while (result[result.length - 1] === null) {
		result.pop();
	}

	// return the array as a string
	return JSON.stringify(arr);
}

function deserialize(str) {
	const arr = JSON.parse(str);
	function deserializeHelper(values) {
		// Take the values one by one
		const val = values.shift();

		// Empty values should just be set to null, not as a Node
		if (!val) {
			return null;
		}

		// create the node
		const newNode = new Node(val);

		// recurse both left and right
		newNode.left = deserializeHelper(values);
		newNode.right = deserializeHelper(values);

		return newNode;
	}

	return deserializeHelper(arr);
}
