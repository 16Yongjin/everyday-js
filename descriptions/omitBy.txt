Omits the key-value pairs corresponding to the keys of the object for which the given function returns falsy.

- Use `Object.keys()` and `Array.prototype.filter()` to remove the keys for which `fn` returns a truthy value.
- Use `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.
- The callback function is invoked with two arguments: (value, key).