// There are 3 main steps here -
// 1.) Make the Trie
// 2.) Navigate the correct position
// 3.) Perform a DFS
function autocomplete(words, prefix) {
	// Build the trie
	const root = new Node(words[0]);
	for (let i = 1; i < words.length; i++) {
		root.addWord(words[i]);
	}

	// Move to prefix node
	let curr = root;
	for (let i = 0; i < prefix.length; i++) {
		let char = prefix[i];
		if (!curr || !curr.children[char]) {
			return false;
		}

		curr = curr.children[char];
	}

	// Do the DFS
	const results = [];
	for (let n of Object.keys(curr.children)) {
		dfs(curr.children[n], prefix + n, results);
	}

	// Return the results
	return results;
}

function dfs(node, str, results) {
	// Return early if no node
	if (!node) {
		return;
	}

	// If this is the end of a word, add it to the results
	if (node.isEnd) {
		results.push(str);
	}

	for (let n of Object.keys(node.children)) {
		// Recurse further into the children nodes
		dfs(node.children[n], str + n, results);
	}
}

// Trie Node data structure
class Node {
	constructor(val) {
		// Set initial properties
		this.children = {};
		this.isEnd = false;

		if (!val) {
			// Set this as the end node if we've reached the end
			this.isEnd = true;
			return this;
		}

		// Take off the first letter and pass in the remainder
		const first = val[0];
		const next = val.substr(1);
		this.children[first] = new Node(next);
		return this;
	}

	// Add a word to this node in the trie
	addWord(word) {
		let curr = this;

		// Loop through the characters in the word
		for (let i = 0; i < word.length; i++) {
			const char = word[i];
			// If it doesn't exist, add it using the constructor
			if (!curr.children[char]) {
				curr.children[char] = new Node(word.substr(i + 1));
				return;
			}

			curr = curr.children[char];
		}

		// We now have the end position, mark as end
		curr.isEnd = true;
		return;
	}
}
