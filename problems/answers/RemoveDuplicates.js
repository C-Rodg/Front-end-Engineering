function removeDupesFromString(str) {
	let read = 0;
	let write = 0;
	const charMap = {};

	while (read < str.length) {
		let c = str[read];

		if (charMap[c]) {
			read++;
		} else {
			str = replaceAt(str, write, c);
			charMap[c] = true;
			read++;
			write++;
		}
	}

	return str.substr(0, write);
}

function replaceAt(str, idx, char) {
	return str.substr(0, idx) + char + str.substr(idx + char.length);
}

// Remove Duplicates from a Linked List
function removeDupesFromLinkedList(head) {
	let prev = null;
	let current = head;
	let nodeHash = {};

	while (current) {
		if (!nodeHash[current.data]) {
			// Add to hash and continue
			nodeHash[current.data] = true;
			prev = current;
			current = current.next;
		} else {
			// Delete the current node and continue
			prev.next = current.next;
			current.next = null;
			current = prev.next;
		}
	}

	return head;
}
