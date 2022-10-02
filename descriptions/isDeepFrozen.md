Checks if an object is deeply frozen.

- Use recursion.
- Use `Object.isFrozen()` on the given object.
- Use `Object.keys()`, `Array.prototype.every()` to check that all keys are either deeply frozen objects or non-object values.