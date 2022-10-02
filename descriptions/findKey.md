Finds the first key that satisfies the provided testing function.
Otherwise `undefined` is returned.

- Use `Object.keys()` to get all the properties of the object, `Array.prototype.find()` to test each key-value pair using `fn`.
- The callback receives three arguments - the value, the key and the object.