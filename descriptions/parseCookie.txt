Parses an HTTP Cookie header string, returning an object of all cookie name-value pairs.

- Use `String.prototype.split()` to separate key-value pairs from each other.
- Use `Array.prototype.map()` and `String.prototype.split()` to separate keys from values in each pair.
- Use `Array.prototype.reduce()` and `decodeURIComponent()` to create an object with all key-value pairs.