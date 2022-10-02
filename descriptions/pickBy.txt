Creates an object composed of the properties the given function returns truthy for.

- Use `Object.keys()` and `Array.prototype.filter()`to remove the keys for which `fn` returns a falsy value.
- Use `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.
- The callback function is invoked with two arguments: (value, key).