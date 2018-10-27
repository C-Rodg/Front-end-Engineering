// Marker to indicate a null child
const MARK = 'MARK';

// ---- SOLUTION #1 ---- //
// Go from serialized array to tree
function deserialize(stream) {
	const currentValue = stream.shift();
	if (currentValue === MARK) {
		return null;
	}
	const node = new Node(currentValue);
	node.left = deserialize(stream);
	node.right = deserialize(stream);
	return node;
}

// Go from a BST to a serialized array
function serialize(node, stream = []) {
	if (!node) {
		stream.push(MARK);
		return;
	}
	stream.push(node.data);
	serialize(node.left, stream);
	serialize(node.right, stream);
	return stream;
}

class Node {
	constructor(d) {
		this.data = d;
		this.left = null;
		this.right = null;
	}
}

// ---- SOLUTION #2 ---- //
// Serialize into preorder AND inorder
// Then to deserialize use both serialized lists to build tree again

// Since we must store 2 lists, this is not a useful technique when node size is large
function serializePreorder(node, stream) {
	if (!node) {
		return;
	}

	stream.push(node.data);
	serializePreorder(node.left, stream);
	serializePreorder(node.right, stream);
	return;
}

function serializeInorder(node, stream) {
	if (!node) {
		return;
	}

	serializeInorder(node.left);
	stream.push(node.data);
	serializeInorder(node.right);
	return;
}

function deserializeWithTwo(
	preorder,
	inorder,
	preStart,
	inStart,
	preEnd,
	inEnd
) {
	// Check for no or one element
	if (preStart > preEnd) {
		return null;
	} else if (preStart === preEnd) {
		const node = new Node(preorder[preStart]);
		return node;
	}

	// first element in preorder is root,
	// we find it in inorder and then determine the amount of elements in
	// left and right subtrees
	let rootIndexInorder = 0;
	for (let i = inStart; i < inEnd + 1; i++) {
		if (inorder[i] === preorder[preStart]) {
			rootIndexInorder = i;
			break;
		}
	}

	// Calculate the number of elements in left and right subtrees
	let leftSubtreeCount = rootIndexInorder - inStart;
	let rightSubtreeCount = inEnd - rootIndexInorder;

	const node = new Node(preorder[preStart]);
	node.left = deserializeWithTwo(
		preorder,
		inorder,
		preStart + 1,
		inStart,
		preStart + leftSubtreeCount,
		inStart + leftSubtreeCount - 1
	);
	node.right = deserializeWithTwo(
		preorder,
		inorder,
		preStart + 1,
		inStart + leftSubtreeCount + 1,
		preEnd,
		inEnd
	);
	return node;
}

// Usage
const preorder = serializePreorder(root);
const inorder = serializeInorder(root);
const deserializedRoot = deserializeWithTwo(
	preorder,
	inorder,
	0,
	0,
	preorder.length - 1,
	inorder.length - 1
);
