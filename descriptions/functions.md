Gets an array of function property names from own (and optionally inherited) enumerable properties of an object.

- Use `Object.keys()` to iterate over the object's own properties.
- If `inherited` is `true`, use `Object.getPrototypeOf()` to also get the object's inherited properties.
- Use `Array.prototype.filter()` to keep only those properties that are functions.
- Omit the second argument, `inherited`, to not include inherited properties by default.