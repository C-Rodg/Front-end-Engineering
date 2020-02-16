// 1.) How many ways can you climb 0 stairs -> 0
// 2.) How many ways can you climb 1 stair -> 1
// 3.) How many ways can you climb 2 stairs -> 2
// so on...

// The pattern here is a fibonacci sequence and builds upon itself.
// The ways to climb 'n' stairs is the ways to climb n - 1 stairs + the ways to climb n - 2 stairs.
// Since we solved the base case (at top), we can build upon this pattern.

const stairClimbing = n => {
	if (n <= 2) {
		return n;
	}

	return stairClimbing(n - 1) + stairClimbing(n - 2);
};

// BONUS:  if we have another way to climb stairs we would just add it to our breakdown
const stairClimbing = n => {
	if (n <= 2) {
		return n;
	}

	return stairClimbing(n - 1) + stairClimbing(n - 2) + stairClimbing(n - 3);
};

// Tip: Use memoization to vastly improve results
// or you could use a bottom up approach

const stairClimbingMultipleWays = (n, ways) => {
	const results = Array(n + 1).fill(0);
	results[0] = 1;
	results[1] = 1;
	for (let i = 2; i <= n; i++) {
		for (let way = 1; way <= ways && way <= i; way++) {
			results[i] += results[i - way];
		}
	}
	return results[n];
};
