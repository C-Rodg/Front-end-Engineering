// Declare your state's flow
const STATES = {
	BEGIN: ['NEGATIVE1', 'DIGIT1'],
	NEGATIVE1: ['DIGIT1', 'DOT'],
	DIGIT1: ['DIGIT1', 'DOT', 'E'],
	DOT: ['DIGIT2'],
	DIGIT2: ['DIGIT2', 'E'],
	E: ['NEGATIVE2', 'DIGIT3'],
	NEGATIVE2: ['DIGIT3'],
	DIGIT3: ['DIGIT3']
};

// Lambda functions to determine when a state is allowed
const LAMBDAS = {
	NEGATIVE1: c => c === '-',
	NEGATIVE2: c => c === '-',
	DIGIT1: c => !isNaN(c),
	DIGIT2: c => !isNaN(c),
	DIGIT3: c => !isNaN(c),
	E: c => c === 'e',
	DOT: c => c === '.'
};

// To solve this problem think about:
// 1.) the flow of states
// 2.) what means a valid state
// 3.) what are the valid end states
function isValidNumber(str) {
	let currentState = 'BEGIN';
	// Loop through the characters of the string
	for (let char of str) {
		let nextState = null;
		// Loop through the possible next states
		for (let potentialNextState of STATES[currentState]) {
			// Check if it's a valid character to enter the state
			if (LAMBDAS[potentialNextState](char)) {
				// We have found a valid next state
				nextState = potentialNextState;
				break;
			}
		}

		// If we didn't find a next state, it's invalid
		if (nextState === null) {
			return false;
		}
		// Set the next state to the current state
		currentState = nextState;
	}

	// Check if we're in a valid end state
	return (
		currentState === 'DIGIT1' ||
		currentState === 'DIGIT2' ||
		currentState === 'DIGIT3'
	);
}
