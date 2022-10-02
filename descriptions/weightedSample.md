Gets a random element from an array, using the provided `weights` as the probabilities for each element.

- Use `Array.prototype.reduce()` to create an array of partial sums for each value in `weights`.
- Use `Math.random()` to generate a random number and `Array.prototype.findIndex()` to find the correct index based on the array previously produced.
- Finally, return the element of `arr` with the produced index.