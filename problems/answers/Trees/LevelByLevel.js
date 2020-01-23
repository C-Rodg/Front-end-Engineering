function levelByLevel(root) {
	// since this is BFS, use a queue DS
	const q = [root];

	// Initialize the string
	let str = '';

	// Loop until queue is empty
	while (q.length) {
		let toProcess = q.length;

		// Loop through amount of nodes to process
		while (toProcess > 0) {
			const node = q.shift();
			str += `${node.val} `;

			// add the left and right children if needed
			// Note: if this wasn't a binary tree, we could loop through .children and add those instead
			if (node.left) {
				q.push(node.left);
			}
			if (node.right) {
				q.push(node.right);
			}

			// decrement the counter
			toProcess -= 1;
		}

		// End of level, print a new line character
		str += '\n';
	}

	return str;
}
