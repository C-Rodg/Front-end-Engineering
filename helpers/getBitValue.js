// Get the bit value (0 or 1) at a certain location for a number
// i.e. 7 (0111), bit 4 -> 0
const getBitValue = (num, bitPosition) => {
	let temp = 1 << bitPosition;
	temp = num & temp;
	if (temp === 0) {
		return 0;
	}
	return 1;
};

// Get a string representation of a number
// i.e. 7 -> '111'.  use '111'.padStart(4, 0) to get '0111'
const getBitString = num => {
	return Number(num).toString(2);
};
