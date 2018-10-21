class LRUCache {
	constructor(size) {
		this.capacity = size;
		this.cache = {};
		this.cacheValues = new LinkedList();
	}

	set(key, value) {
		if (this.cache[key]) {
			let node = this.cache[key];
			node.data = value;
			this.cacheValues.remove(node);
			this.cacheValues.insertAtTail(node);
			return node.data;
		} else {
			this.evictIfNeeded();
			let node = new LinkedListNode(key, value);
			this.cacheValues.insertAtTail(node);
			this.cache[key] = node;
		}
	}

	get(key) {
		if (this.cache[key]) {
			let node = this.cache[key];
			this.cacheValues.remove(node);
			this.cacheValues.insertAtTail(node);
			return node.data;
		} else {
			return null;
		}
	}

	evictIfNeeded() {
		if (this.cacheValues.size >= this.capacity) {
			let node = this.cacheValues.removeAt(0);
			delete this.cache[node];
		}
	}
}
