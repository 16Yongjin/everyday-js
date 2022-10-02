Converts a number in bytes to a human-readable string.

- Use an array dictionary of units to be accessed based on the exponent.
- Use `Number.prototype.toPrecision()` to truncate the number to a certain number of digits.
- Return the prettified string by building it up, taking into account the supplied options and whether it is negative or not.
- Omit the second argument, `precision`, to use a default precision of `3` digits.
- Omit the third argument, `addSpace`, to add space between the number and unit by default.