Inverts the key-value pairs of an object, without mutating it.

- Use `Object.keys()` and `Array.prototype.reduce()` to invert the key-value pairs of an object and apply the function provided (if any).
- Omit the second argument, `fn`, to get the inverted keys without applying a function to them.
- The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. If a function is supplied, it is applied to each inverted key.