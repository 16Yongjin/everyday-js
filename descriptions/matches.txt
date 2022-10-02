Compares two objects to determine if the first one contains equivalent property values to the second one.

- Use `Object.keys()` to get all the keys of the second object.
- Use `Array.prototype.every()`, `Object.prototype.hasOwnProperty()` and strict comparison to determine if all keys exist in the first object and have the same values.