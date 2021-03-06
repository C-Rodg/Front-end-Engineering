// 1.) Get number of subsets -> 2^n
// 2.) Loop from 0 -> number of total subsets using 'i'
// 3.) Calculate the binary representation of 'i' (properly pad number)
// 4.) For the '1' digits in the binary representation, add the index of the '1' from the set to the set to add
// 5.) Return the set of sets

// Question #2: To solve, just keep a sum count and if sum === 'k', then add the set

function getAllSubsets(arr) {
	const numberOfSubsets = Math.pow(2, arr.length);
	const result = [];
	for (let i = 0; i < numberOfSubsets; i++) {
		const newSet = [];
		const binaryString = getBinaryString(i).padStart(arr.length, '0');
		for (let c = 0; c < binaryString.length; c++) {
			if (binaryString[c] === '1') {
				newSet.push(arr[c]);
			}
		}
		result.push(newSet);
	}
	return result;
}

// Helper to get binary string
function getBinaryString(num) {
	return Number(num).toString(2);
}

// Alternative to get the binary string is to shift bits
function getBit(num, bit) {
	let temp = 1 << bit;
	temp = temp & num;
	if (temp === 0) {
		return 0;
	}
	return 1;
}
