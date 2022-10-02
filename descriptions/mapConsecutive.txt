Maps each block of `n` consencutive elements using the given function, `fn`.

- Use `Array.prototype.slice()` to get `arr` with `n` elements removed from the left.
- Use `Array.prototype.map()` and `Array.prototype.slice()` to apply `fn` to each block of `n` consecutive elements in `arr`.