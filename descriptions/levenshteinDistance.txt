Calculates the difference between two strings, using the [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) algorithm.

- If either of the two strings has a `length` of zero, return the `length` of the other one.
- Use a `for` loop to iterate over the letters of the target string and a nested `for` loop to iterate over the letters of the source string.
- Calculate the cost of substituting the letters corresponding to `i - 1` and `j - 1` in the target and source respectively (`0` if they are the same, `1` otherwise).
- Use `Math.min()` to populate each element in the 2D array with the minimum of the cell above incremented by one, the cell to the left incremented by one or the cell to the top left incremented by the previously calculated cost.
- Return the last element of the last row of the produced array.