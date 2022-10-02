Creates an array of elements, ungrouping the elements in an array produced by [zip](/js/s/zip) and applying the provided function.

- Use `Math.max()` and the spread operator (`...`) to get the longest subarray in the array, `Array.prototype.map()` to make each element an array.
- Use `Array.prototype.reduce()` and `Array.prototype.forEach()` to map grouped values to individual arrays.
- Use `Array.prototype.map()` and the spread operator (`...`) to apply `fn` to each individual group of elements.