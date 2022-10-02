Applies `fn` to each value in `arr`, splitting it each time the provided function returns a new value.

- Use `Array.prototype.reduce()` with an accumulator object that will hold the resulting array and the last value returned from `fn`.
- Use `Array.prototype.push()` to add each value in `arr` to the appropriate partition in the accumulator array.