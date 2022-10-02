Joins all given URL segments together, then normalizes the resulting URL.

- Use `String.prototype.join()` to combine URL segments.
- Use a series of `String.prototype.replace()` calls with various regexps to normalize the resulting URL (remove double slashes, add proper slashes for protocol, remove slashes before parameters, combine parameters with `'&'` and normalize first parameter delimiter).