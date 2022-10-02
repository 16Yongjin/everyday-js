Creates an array of elements, grouped based on their position in the original arrays.

- Use `Math.max()`, `Function.prototype.apply()` to get the longest array in the arguments.
- Create an array with that length as return value and use `Array.from()` with a mapping function to create an array of grouped elements.
- If lengths of the argument arrays vary, `undefined` is used where no value could be found.