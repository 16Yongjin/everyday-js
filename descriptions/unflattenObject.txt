Unflatten an object with the paths for keys.

- Use nested `Array.prototype.reduce()` to convert the flat path to a leaf node.
- Use `String.prototype.split()` to split each key with a dot delimiter and `Array.prototype.reduce()` to add objects against the keys.
- If the current accumulator already contains a value against a particular key, return its value as the next accumulator.
- Otherwise, add the appropriate key-value pair to the accumulator object and return the value as the accumulator.