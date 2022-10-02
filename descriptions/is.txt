Checks if the provided value is of the specified type.

- Ensure the value is not `undefined` or `null` using `Array.prototype.includes()`.
- Use `Object.prototype.constructor` to compare the constructor property on the value with `type` to check if the provided value is of the specified `type`.