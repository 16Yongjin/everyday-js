Finds all unique values of an array, based on a provided comparator function, starting from the right.

- Use `Array.prototype.reduceRight()` and `Array.prototype.some()` to create an array containing only the last unique occurrence of each value, based on the comparator function, `fn`.
- The comparator function takes two arguments: the values of the two elements being compared.