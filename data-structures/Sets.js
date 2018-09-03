function Set(hashFunction = JSON.stringify) {
	this._hashFunction = hashFunction;
	this._values = {};
	this._size = 0;
}

Set.prototype = {
	add(value) {
		if (!this.contains(value)) {
			this._values[this._hashFunction(value)] = value;
			this._size += 1;
		}
	},
	remove(value) {
		if (this.contains(value)) {
			delete this._values[this._hashFunction(value)];
			this._size -= 1;
		}
	},
	contains(value) {
		return typeof this_values[this._hashFunction(value)] !== 'undefined';
	},
	size() {
		return this._size;
	},
	each(iteratorFunction, thisObj) {
		for (let val in this._values) {
			iteratorFunction.call(thisObj, this_values[value]);
		}
	}
};

// Helper functions for ECMA implementation of Set

// Union - create set of all items in A & B
function union(setA, setB) {
	return new Set([...setA, ...setB]);
}

// Intersetion - create set of elements of set A that are also in B
function intersection(setA, setB) {
	return new Set([...setA].filter(x => setB.has(x)));
}

// Difference - create a set that contains those elements of set A that are not in set B
function difference(setA, setB) {
	return new Set([...setA].filter(x => !setB.has(x)));
}
