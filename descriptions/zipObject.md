Associates properties to values, given array of valid property identifiers and an array of values.

- Use `Array.prototype.reduce()` to build an object from the two arrays.
- If the length of `props` is longer than `values`, remaining keys will be `undefined`.
- If the length of `values` is longer than `props`, remaining values will be ignored.