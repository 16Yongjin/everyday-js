Finds the common keys between two objects.

- Use `Object.keys()` to get the keys of the first object.
- Use `Object.prototype.hasOwnProperty()` to check if the second object has a key that's in the first object.
- Use `Array.prototype.filter()` to filter out keys that aren't in both objects.