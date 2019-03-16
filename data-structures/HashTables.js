// Runtime
// Insertion/Deletion/Access O(1)

// Collisions:
// Two Methods-
// 1.) Separate Chaining - Insert a linked list at collision spot and append elements that way
// 2.) Linear Probing - Insert at the next available slot, but this requires if item isn't found to iterate to end of table

// Hash function should map keys evenly to prevent collisions
// Impacted by hash function and load factor (slots used / slots available)
// A bad load factor is over 0.7

// Use prime numbers for array size to assist avoiding collisions

class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, value) {
		// 1.) Hash key
		// 2.) Store using separate chaining

		const hashedKey = this._hash(key);
		if (!this.keyMap[hashedKey]) {
			this.keyMap[hashedKey] = [];
		}
		this.keyMap[hashedKey].push([key, value]);
	}

	get(key) {
		const hashedKey = this._hash(key);
		if (!this.keyMap[hashedKey]) {
			return null;
		}

		for (let i = 0; i < this.keyMap[hashedKey].length; i++) {
			if (this.keyMap[hashedKey][i][0] === key) {
				return this.keyMap[hashedKey][i][1];
			}
		}
		return null;
	}

	keys() {
		const results = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i]; j++) {
					if (!results.includes(this.keyMap[i][j][0])) {
						results.push(this.keyMap[i][j][0]);
					}
				}
			}
		}
		return results;
	}

	values() {
		const results = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i]; j++) {
					if (!results.includes(this.keyMap[i][j][1])) {
						results.push(this.keyMap[i][j][1]);
					}
				}
			}
		}
		return results;
	}
}

// Basic hash functions
// - Arithmetic Modular: return key % table.length;
// - Truncation: return key % 1000;  // will return keys 1-3 digits long
// - Folding: takes a key and chunk size and does some kind of arithmetic at each chunk:
// - - i.e. key = 456789, chunk = 2 may result in 45 + 67 + 89 = 201
