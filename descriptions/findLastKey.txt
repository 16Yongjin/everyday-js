Finds the last key that satisfies the provided testing function.
Otherwise `undefined` is returned.

- Use `Object.keys()` to get all the properties of the object.
- Use `Array.prototype.reverse()` to reverse the order and `Array.prototype.find()` to test the provided function for each key-value pair.
- The callback receives three arguments - the value, the key and the object.