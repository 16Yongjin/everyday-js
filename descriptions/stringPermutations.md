Generates all permutations of a string (contains duplicates).

- Use recursion.
- For each letter in the given string, create all the partial permutations for the rest of its letters.
- Use `Array.prototype.map()` to combine the letter with each partial permutation.
- Use `Array.prototype.reduce()` to combine all permutations in one array.
- Base cases are for `String.prototype.length` equal to `2` or `1`.
- ⚠️ **WARNING**: The execution time increases exponentially with each character. Anything more than 8 to 10 characters will cause your environment to hang as it tries to solve all the different combinations.