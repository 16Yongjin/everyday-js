Returns the most frequent element in an array.

- Use `Array.prototype.reduce()` to map unique values to an object's keys, adding to existing keys every time the same value is encountered.
- Use `Object.entries()` on the result in combination with `Array.prototype.reduce()` to get the most frequent value in the array.