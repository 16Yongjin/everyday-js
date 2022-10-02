Generates a query string from the key-value pairs of the given object.

- Use `Array.prototype.reduce()` on `Object.entries()` to create the query string from `queryParameters`.
- Determine the `symbol` to be either `?` or `&` based on the length of `queryString`.
- Concatenate `val` to `queryString` only if it's a string.
- Return the `queryString` or an empty string when the `queryParameters` are falsy.