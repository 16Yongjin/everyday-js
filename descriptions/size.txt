Gets the size of an array, object or string.

- Get type of `val` (`array`, `object` or `string`).
- Use `Array.prototype.length` property for arrays.
- Use `length` or `size` value if available or number of keys for objects.
- Use `size` of a [`Blob` object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) created from `val` for strings.
- Split strings into array of characters with `String.prototype.split()` and return its length.