Sorts an array of numbers, using the insertion sort algorithm.

- Use `Array.prototype.reduce()` to iterate over all the elements in the given array.
- If the `length` of the accumulator is `0`, add the current element to it.
- Use `Array.prototype.some()` to iterate over the results in the accumulator until the correct position is found.
- Use `Array.prototype.splice()` to insert the current element into the accumulator.