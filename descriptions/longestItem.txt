Takes any number of iterable objects or objects with a `length` property and returns the longest one.

- Use `Array.prototype.reduce()`, comparing the length of objects to find the longest one.
- If multiple objects have the same length, the first one will be returned.
- Returns `undefined` if no arguments are provided.