Performs stable sorting of an array, preserving the initial indexes of items when their values are the same.

- Use `Array.prototype.map()` to pair each element of the input array with its corresponding index.
- Use `Array.prototype.sort()` and a `compare` function to sort the list, preserving their initial order if the items compared are equal.
- Use `Array.prototype.map()` to convert back to the initial array items.
- Does not mutate the original array, but returns a new array instead.