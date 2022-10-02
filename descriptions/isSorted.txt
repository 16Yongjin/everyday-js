Checks if a numeric array is sorted.

- Calculate the ordering `direction` for the first pair of adjacent array elements.
- Return `0` if the given array is empty, only has one element or the `direction` changes for any pair of adjacent array elements.
- Use `Math.sign()` to covert the final value of `direction` to `-1` (descending order) or `1` (ascending order).