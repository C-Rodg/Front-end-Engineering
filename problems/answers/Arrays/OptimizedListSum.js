class ListSum {
	constructor(list) {
		this.list = list;
		// initialize with 0 incase they are trying to access from 0 -> value
		this.sums = [0];

		let sum = 0;
		for (let i = 0; i < this.list.length; i++) {
			// Create a prefix sum array
			const val = this.list[i];
			sum += val;

			// Add the running sum to our sums array
			this.sums.push(sum);
		}
	}

	// This is the function that is called.
	getRange(start, end) {
		return this.sums[endSum] - this.sums[beginningSum];
	}
}

const listSum = new ListSum([1, 2, 3]).getRange(0, 1);
