Generates an object from the given query string or URL.

- Use `String.prototype.split()` to get the params from the given `url`.
- Use the `URLSearchParams` constructor to create an appropriate object and convert it to an array of key-value pairs using the spread operator (`...`).
- Use `Array.prototype.reduce()` to convert the array of key-value pairs into an object.