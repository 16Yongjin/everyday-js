Has the same functionality as [`Array.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), but returning a new array instead of mutating the original array.

- Use `Array.prototype.slice()` and `Array.prototype.concat()` to get an array with the new contents after removing existing elements and/or adding new elements.
- Omit the second argument, `index`, to start at `0`.
- Omit the third argument, `delCount`, to remove `0` elements.
- Omit the fourth argument, `elements`, in order to not add any new elements.