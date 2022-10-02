Encodes a set of form elements as a query string.

- Use the `FormData` constructor to convert the HTML `form` to `FormData`.
- Use `Array.from()` to convert to an array, passing a map function as the second argument.
- Use `Array.prototype.map()` and `encodeURIComponent()` to encode each field's value.
- Use `Array.prototype.join()` with appropriate arguments to produce an appropriate query string.