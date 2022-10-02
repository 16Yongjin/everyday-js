Checks if the given string is valid in the simplified extended ISO format (ISO 8601).

- Use the `Date` constructor to create a `Date` object from the given string.
- Use `Date.prototype.valueOf()` and `Number.isNaN()` to check if the produced date object is valid.
- Use `Date.prototype.toISOString()` to compare the ISO formatted string representation of the date with the original string.