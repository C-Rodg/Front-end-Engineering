// We first check for edge cases.
// We then go through the string using a statemachine to detect invalid states.
// State 0: start state (uppercase)
// - 'space' = go to State 1
// - 'a-z' = go to State 2
// State 1: space state
// - 'A-Z' = go to State 0
// - 'a-z' = go to State 2
// State 2: lowercase state
// - 'space' = go to State 1
// - '.' = go to State 3 !! This is the only way to complete!!
// - 'a-z' = go to State 2
// State 3: end

function sentenceChecker(sentence) {
	// Manage States
	const STATE_START = 0;
	const STATE_SPACE = 1;
	const STATE_LOWER = 2;
	const STATE_END = 3;

	// Ensure it starts with a capital
	if (!isUpperCaseAlpha(sentence[0])) {
		return false;
	}

	// Ensure it ends with punctuation
	if (!isPunctuation(sentence[sentence.length - 1])) {
		return false;
	}

	// Keep track of two states - previous and current
	let prevState = STATE_START;
	let currState = STATE_START;

	// Track where we are in the sentence
	let idx = 1;

	// Go through the sentence
	while (sentence[idx]) {
		const char = sentence[idx];

		// Determine the current state
		if (isUpperCaseAlpha(char)) {
			currState = STATE_START;
		} else if (char === ' ') {
			currState = STATE_SPACE;
		} else if (isLowerCaseAlpha(char)) {
			currState = STATE_LOWER;
		} else if (isPunctuation(char)) {
			currState = STATE_END;
		}

		// This checks for two spaces, two uppercase letters, two punctuation - which are all invalid states
		if (prevState === currState && currState !== STATE_LOWER) {
			return false;
		}

		// This checks for a lower case letter followed by an uppercase letter - which is invalid.
		if (prevState === STATE_LOWER && currState === STATE_START) {
			return false;
		}

		// If we've reached the end of the sentence, ensure we came from a valid state
		if (currState === STATE_END && prevState !== STATE_START) {
			return true;
		}

		// Increment counter and track previous state
		idx += 1;
		prevState = currState;
	}

	// Never made it to state 3
	return false;
}

// Helper - check if it's an uppercase letter
function isUpperCaseAlpha(char) {
	if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
		return true;
	}
	return false;
}

// Helper - check if it's a lowercase letter
function isLowerCaseAlpha(char) {
	if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
		return true;
	}
	return false;
}

// Helper - check for punctuation
function isPunctuation(char) {
	if (char === '.' || char === '!' || char === '?') {
		return true;
	}
	return false;
}
