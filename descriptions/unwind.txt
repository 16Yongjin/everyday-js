Produces an array of objects from an object and one of its array-valued properties.

- Use object destructuring to exclude the key-value pair for the specified `key` from the object.
- Use `Array.prototype.map()` for the values of the given `key` to create an array of objects.
- Each object contains the original object's values, except for `key` which is mapped to its individual values.