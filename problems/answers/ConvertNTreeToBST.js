function convertNTreeToBT(ntree) {
	function convert(root, isLeft) {
		if (!root) {
			return;
		}

		const node = new Node(root.data);
		let lastNode = node;

		for (let c in root.children) {
			if (isLeft) {
				lastNode.left = convert(root.children[c], false);
				lastNode = lastNode.left;
			} else {
				lastNode.right = convert(root.children[c], true);
				lastNode = lastNode.right;
			}
		}

		return node;
	}

	return traverse(ntree, true);
}

function convertBTToNTree(root) {
	function convert(root, isLeft) {
		if (!node) {
			return;
		}

		const node = new TreeNode(root.data);
		let temp = node;

		if (isLeft) {
			while (temp.left) {
				let child = convert(temp.left, false);
				node.children.push(child);
				temp = temp.left;
			}
		} else {
			while (temp.right) {
				let child = convert(temp.right, true);
				node.children.push(child);
				temp = temp.right;
			}
		}
		return node;
	}

	return convert(root, true);
}
