function anagramCharMap(stringA, stringB) {
	const mapA = getCharMap(stringA);
	const mapB = getCharMap(stringB);

	if (Object.keys(mapA).length !== Object.keys(mapB).length) {
		return false;
	}

	for (let char in mapA) {
		if (mapA[char] !== mapB[char]) {
			return false;
		}
	}
	return true;
}

function getCharMap(str) {
	const charMap = {};
	const cleanedString = str.replace(/\W/g, '').toUpperCase();
	for (let char of cleanedString) {
		charMap[char] = charMap[char] + 1 || 1;
	}
	return charMap;
}

// ------- SOLUTION TWO --------- //
// Quick and dirty
function anagramSort(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
	return str
		.replace(/\W/g, '')
		.toUpperCase()
		.split('')
		.sort()
		.join();
}
