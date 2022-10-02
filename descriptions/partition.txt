Groups the elements into two arrays, depending on the provided function's truthiness for each element.

- Use `Array.prototype.reduce()` to create an array of two arrays.
- Use `Array.prototype.push()` to add elements for which `fn` returns `true` to the first array and elements for which `fn` returns `false` to the second one.