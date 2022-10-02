Calculates the sum of the powers of all the numbers from `start` to `end` (both inclusive).

- Use `Array.prototype.fill()` to create an array of all the numbers in the target range.
- Use `Array.prototype.map()` and the exponent operator (`**`) to raise them to `power` and `Array.prototype.reduce()` to add them together.
- Omit the second argument, `power`, to use a default power of `2`.
- Omit the third argument, `start`, to use a default starting value of `1`.