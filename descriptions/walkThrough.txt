Creates a generator, that walks through all the keys of a given object.

- Use recursion.
- Define a generator function, `walk`, that takes an object and an array of keys.
- Use a `for...of` loop and `Object.keys()` to iterate over the keys of the object.
- Use `typeof` to check if each value in the given object is itself an object.
- If so, use the `yield*` expression to recursively delegate to the same generator function, `walk`, appending the current `key` to the array of keys. Otherwise, `yield` an array of keys representing the current path and the value of the given `key`.
- Use the `yield*` expression to delegate to the `walk` generator function.