Initializes an array containing the numbers in the specified range (in reverse) where `start` and `end` are inclusive with their common difference `step`.

- Use `Array.from()` to create an array of the desired length, `(end - start + 1) / step`.
- Use `Array.prototype.map()` to fill the array with the desired values in the given range.
- Omit the second argument, `start`, to use a default value of `0`.
- Omit the last argument, `step`, to use a default value of `1`.