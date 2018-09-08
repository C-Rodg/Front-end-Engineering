// Singleton Design Pattern
// limits the number of instances of a particular
// object to just one

// useful when system-wide actions need to be
// coordinated from a single central place

const mySingleton = (function() {
	let instance;
	function init() {
		let privateVariable = 'my private var';

		return {
			publicMethod: function() {
				console.log('Public Methods!');
			},
			publicProperty: 'I am a public prop',
			getPrivateProp: function() {
				return privateVariable;
			}
		};
	}

	return {
		getInstance: function() {
			if (!instance) {
				instance = init();
			}
			return instance;
		}
	};
})();

// Usage:
const singletonA = mySingleton.getInstance();
const singletonB = mySingleton.getInstance();
singletonA === singletonB; // true
