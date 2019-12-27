// Bloom filter
// -- A fast way of determining if something is NOT in a set
// -- Only acceptable when there can be false positives - i.e. this 'might' be in the set.
// -- Don't use slow, cryptographically secure hashing functions like SHA/MD5. This ruins the point of it being fast.
// -- Always allocate plenty of space for the filter because you cannot remove items from the filter or expand the filter to a bigger size.
// 1.) Create an array with 0's
// 2.) On item added, hash the input with 2+ hashing functions and use the returned values to mark with 1's at the index in the array
// 3.) On check if item has been added, run hashing and check for 0's and 1's.  If a 0 is found it is definitely NOT in the set. If 1's then it MIGHT be in the set.

class BloomFilter {
	constructor() {
		this.size = 100; // should be adjusted per data set
		this.storage = new Array(this.size).fill(0);
	}

	insert(item) {
		// Calculate hashes
		const h1 = this.hash1(item);
		const h2 = this.hash2(item);

		// Mark as seen
		this.storage[h1] = 1;
		this.storage[h2] = 1;
	}

	// check if item is definitely not seen, or "maybe" seen
	hasNotBeenSeen(item) {
		// Calculate hashes
		const h1 = this.hash1(item);
		const h2 = this.hash2(item);
		const hashArray = [h1, h2];

		for (let idx of hashArray) {
			if (this.storage[idx]) {
				// A '1' was seen, so this 'may' already exist
				return false;
			}
		}
		// All zeros were returned. Has 100% not been seen
		return true;
	}

	hash1() {
		// some hashing function...
		// returns number containing index from 0 -> this.size
	}

	hash2() {
		// some different hashing function...
		// returns number containing index from 0 -> this.size
	}
}
