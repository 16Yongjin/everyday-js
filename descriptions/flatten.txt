Flattens an array up to the specified depth.

- Use recursion, decrementing `depth` by `1` for each level of depth.
- Use `Array.prototype.reduce()` and `Array.prototype.concat()` to merge elements or arrays.
- Base case, for `depth` equal to `1` stops recursion.
- Omit the second argument, `depth`, to flatten only to a depth of `1` (single flatten).