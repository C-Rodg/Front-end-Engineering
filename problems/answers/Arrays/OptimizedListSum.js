class ListSum {
	constructor(list) {
		this.list = list;
		this.sums = [];

		let sum = 0;
		for (let i = 0; i < this.list.length; i++) {
			// Create a prefix sum array
			const val = this.list[i];
			sum += val;
			this.sums[i] = sum;
		}
	}

	// This is the function that is called.
	getRange(start, end) {
		const endSum = this.sums[end - 1];

		// Handle the case where we want to start from the beginning
		if (start <= 0) {
			beginningSum = 0;
		} else {
			beginningSum = this.sums[start - 1];
		}

		return endSum - beginningSum;
	}
}

const listSum = new ListSum([1, 2, 3]).getRange(0, 1);
