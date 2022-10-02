Checks if a string is an anagram of another string (case-insensitive, ignores spaces, punctuation and special characters).

- Use `String.prototype.toLowerCase()` and `String.prototype.replace()` with an appropriate regular expression to remove unnecessary characters.
- Use `String.prototype.split()`, `Array.prototype.sort()` and `Array.prototype.join()` on both strings to normalize them, then check if their normalized forms are equal.