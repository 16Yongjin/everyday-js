Creates an array of elements, grouped based on the position in the original arrays and using a function to specify how grouped values should be combined.

- Check if the last argument provided is a function.
- Use `Math.max()` to get the longest array in the arguments.
- Use `Array.from()` to create an array with appropriate length and a mapping function to create array of grouped elements.
- If lengths of the argument arrays vary, `undefined` is used where no value could be found.
- The function is invoked with the elements of each group.