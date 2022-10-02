Truncates a string up to specified length, respecting whitespace when possible.

- Determine if `String.prototype.length` is greater or equal to `lim`. If not, return it as-is.
- Use `String.prototype.slice()` and `String.prototype.lastIndexOf()` to find the index of the last space below the desired `lim`.
- Use `String.prototype.slice()` to appropriately truncate `str` based on `lastSpace`, respecting whitespace if possible and appending `ending` at the end.
- Omit the third argument, `ending`, to use the default ending of `'...'`.