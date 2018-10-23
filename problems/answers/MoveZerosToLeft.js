function moveZerosToLeft(arr) {
	let read = arr.length - 1;
	let write = arr.length - 1;

	while (read >= 0) {
		if (arr[read] === 0) {
			read--;
		} else {
			arr[write] = arr[read];
			read--;
			write--;
		}
	}

	while (write >= 0) {
		arr[write] = 0;
		write--;
	}

	return arr;
}

// Question #2
function stripWhiteSpaces(str) {
	let read = str.length - 1;
	let write = str.length - 1;

	while (read < str.length) {
		if (str[read] === ' ' || str[read] === '\t') {
			read++;
		} else {
			str = replaceAt(str, write, str[read]);
			read++;
			write++;
		}
	}

	return str.substr(0, write);
}

// Helper function
function replaceAt(str, idx, char) {
	return str.substr(0, idx) + char + str.substr(idx + char.length);
}
