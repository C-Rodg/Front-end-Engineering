// Create a trie data structure that holds some additional metadata
class Node {
	constructor(val) {
		// Setup initial props
		this.children = {};
		this.seen = 1;
		this.isEnd = false;
		if (!val) {
			// At the end of the string
			this.isEnd = true;
			return this;
		}
		// Use the first letter as the key and recursively call on the rest
		const first = val[0];
		const next = val.substr(1);
		this.children[first] = new Node(next);
		return this;
	}

	// Method to add new word to trie
	addNewWord(word) {
		let currentNode = this;
		for (let i = 0; i < word.length; i++) {
			const char = word[i];

			// Increment the seen counter
			currentNode.seen += 1;

			if (!currentNode.children[char]) {
				// There isn't a word built here yet, so just use the constructor
				currentNode.children[char] = new Node(word.substr(i + 1));
				return;
			}

			// Move the current node to the next character node
			currentNode = currentNode.children[char];
		}

		if (currentNode) {
			currentNode.isEnd = true;
		}
	}
}

// Main function for solving shortest unique prefix
function shortestUniquePrefix(words) {
	// Create the root of the trie
	const root = new Node(words[0]);

	// Add in the additional words to the trie
	for (let i = 1; i < words.length; i++) {
		root.addNewWord(words[i]);
	}

	// Go over each word and get the unique prefix
	const results = [];
	for (let i = 0; i < words.length; i++) {
		results.push(getPrefix(words[i], root));
	}
	return results;
}

// Get the unique prefix for a given word in a trie
function getPrefix(word, root) {
	let prefix = '';
	let curr = root;
	// Loop over characters of the word
	for (let i = 0; i < word.length; i++) {
		const char = word[i];
		curr = curr.children[char];
		prefix += char;
		if (!curr) {
			// Break early if the word hasn't been added yet
			return false;
		}

		if (curr.seen === 1) {
			// We've only seen this node once, so this must be the point at which it's unique
			return prefix;
		}
	}
}
