Gets the target value in a nested JSON object, based on the `keys` array.

- Compare the keys you want in the nested JSON object as an `Array`.
- Use `Array.prototype.reduce()` to get the values in the nested JSON object one by one.
- If the key exists in the object, return the target value, otherwise return `null`.