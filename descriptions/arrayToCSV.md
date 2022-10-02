Converts a 2D array to a comma-separated values (CSV) string.

- Use `Array.prototype.map()` and `Array.prototype.join()` to combine individual 1D arrays (rows) into strings, using the provided `delimiter`.
- Use `Array.prototype.join()` to combine all rows into a CSV string, separating each row with a newline (`\n`).
- Omit the second argument, `delimiter`, to use a default delimiter of `,`.