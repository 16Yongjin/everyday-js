Implements the [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.

- Use `String.prototype.split()`, `Array.prototype.reverse()` and `Array.prototype.map()` in combination with `parseInt()` to obtain an array of digits.
- Use `Array.prototype.shift()` to obtain the last digit.
- Use `Array.prototype.reduce()` to implement the Luhn Algorithm.
- Return `true` if `sum` is divisible by `10`, `false` otherwise.