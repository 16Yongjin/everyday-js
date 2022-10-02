Converts an array of objects to a comma-separated values (CSV) string that contains only the `columns` specified.

- Use `Array.prototype.join()` to combine all the names in `columns` to create the first row, using the provided `delimiter`.
- Use `Array.prototype.map()` and `Array.prototype.reduce()` to create a row for each object. Substitute non-existent values with empty strings and only mapping values in `columns`.
- Use `Array.prototype.join()` to combine all rows into a string, separating each row with a newline (`\n`).
- Omit the third argument, `delimiter`, to use a default delimiter of `','`.