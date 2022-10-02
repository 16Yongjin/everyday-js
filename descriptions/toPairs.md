Creates an array of key-value pair arrays from an object or other iterable.

- Check if `Symbol.iterator` is defined and, if so, use `Array.prototype.entries()` to get an iterator for the given iterable.
- Use `Array.from()` to convert the result to an array of key-value pair arrays.
- If `Symbol.iterator` is not defined for `obj`, use `Object.entries()` instead.