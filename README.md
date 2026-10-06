# HashMap

A hashmap implemented from scratch in JavaScript, using separate chaining (linked lists) to handle collisions.

## Structure

* `HashMap`: manages a `buckets` array along with a `capacity` and `load factor`, growing automatically when the load factor is exceeded
* `LinkedList` / `Node`: used internally by each bucket to store key-value pairs and handle collisions

## Methods

* `hash(key)`: produces a bucket index for a given string key
* `set(key, value)`: adds a new key-value pair, or updates the value if the key already exists; grows and rehashes the map when the load factor is exceeded
* `get(key)`: returns the value associated with a key, or `undefined` if not found
* `has(key)`: returns `true`/`false` depending on whether the key exists
* `remove(key)`: removes the entry for a key and returns `true`, or returns `false` if the key wasn't found
* `length()`: returns the number of stored keys
* `clear()`: removes all entries
* `keys()`: returns an array of all keys
* `values()`: returns an array of all values
* `entries()`: returns an array of `[key, value]` pairs

## Getting Started

Clone the repo and install dependencies:
```bash
git clone https://github.com/OverlordGummyBear/hashmap.git
cd hashmap
npm install
```