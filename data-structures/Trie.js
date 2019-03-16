// Tries are trees of associated data
// often used for dictionaries

class Node {
	constructor() {
		this.keys = new Map();
		this.end = false;
	}

	setEnd() {
		this.end = true;
	}

	setNotEnd() {
		this.end = false;
	}

	isEnd() {
		return this.end;
	}
}

class Trie {
	constructor() {
		this.root = new Node();
	}

	add(input, node = this.root) {
		if (!input) {
			node.setEnd();
			return;
		} else if (!node.keys.has(input[0])) {
			// Doesn't have this 'char' node yet
			node.keys.set(input[0], new Node());
			return this.add(input.substr(1), node.keys.get(input[0]));
		} else {
			return this.add(input.substr(1), node.keys.get(input[0]));
		}
	}

	isWord(word) {
		let node = this.root;
		while (word.length > 1) {
			if (!node.keys.has(word[0])) {
				return false;
			} else {
				node = node.keys.get(word[0]);
				word = word.substr(1);
			}
		}
		// Last character so verify exists and isEnd
		return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
	}

	print() {
		const words = [];
		const search = (node, str) => {
			if (node.keys.size != 0) {
				for (let letter of node.keys.keys()) {
					search(node.keys.get(letter), str.concat(letter));
				}
				if (node.isEnd()) {
					words.push(str);
				}
			} else {
				str.length > 0 ? words.push(str) : undefined;
				return;
			}
		};
		search(this.root, '');
		return words.length > 0 ? words : null;
	}

	// 3 scenarios for deleting a word in a trie:
	// - no suffix or prefix words -> just remove all nodes
	// - word to delete is a prefix -> just unmark isEnd
	// - word to delete has a common prefix -> traverse up the path deleting nodes until common prefix is hit
	delete(word) {
		// Helper function:
		// Works through the levels of the word/key
		// Once it reaches the end of the word, it checks if the last node
		// has any children.  If it does, we just mark as no longer an end.
		// If it doesn't, we continue bubbling up deleting the keys until we find a node
		// that either has other children or is marked as an end.
		const deleteHelper = (word, node, length, level) => {
			let deletedSelf = false;
			if (!node) {
				console.log("Key doesn't exist");
				return deletedSelf;
			}

			// Base case
			if (length === level) {
				if (node.keys.length === 0) {
					deletedSelf = true;
				} else {
					node.setNotEnd();
					deletedSelf = false;
				}
			} else {
				let childNode = node.keys.get(word[level]);
				let childDeleted = deleteHelper(word, childNode, length, level + 1);
				if (childDeleted) {
					node.keys.delete(word[level]);

					if (node.isEnd()) {
						deletedSelf = false;
					} else if (node.keys.length) {
						deletedSelf = false;
					} else {
						deletedSelf = true;
					}
				} else {
					deletedSelf = false;
				}
			}

			return deletedSelf;
		};

		deleteHelper(word, this.root, word.length, 0);
	}
}
