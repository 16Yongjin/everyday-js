Sorts an array of numbers, using the merge sort algorithm.

- Use recursion.
- If the `length` of the array is less than `2`, return the array.
- Use `Math.floor()` to calculate the middle point of the array.
- Use `Array.prototype.slice()` to slice the array in two and recursively call `mergeSort()` on the created subarrays.
- Finally, use `Array.from()` and `Array.prototype.shift()` to combine the two sorted subarrays into one.