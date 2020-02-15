function validMapping(str1, str2) {
	const characterMap = {};

	if (str1.length !== str2.length) {
		// Unmatching lengths means they cannot be mapped
		return false;
	}

	for (let i = 0; i < str1.length; i++) {
		const str1Char = str1[i];

		// Check if it exists in our map
		if (characterMap[str1Char]) {
			if (characterMap[str1Char] !== str2[i]) {
				// the mapping exists, but it isn't to this character
				return false;
			}
		} else {
			// Add the map to the connected string 2 character
			characterMap[str1Char] = str2[i];
		}
	}

	return true;
}
