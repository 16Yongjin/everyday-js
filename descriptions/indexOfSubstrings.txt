Finds all the indexes of a substring in a given string.

- Use `Array.prototype.indexOf()` to look for `searchValue` in `str`.
- Use `yield` to return the index if the value is found and update the index, `i`.
- Use a `while` loop that will terminate the generator as soon as the value returned from `Array.prototype.indexOf()` is `-1`.