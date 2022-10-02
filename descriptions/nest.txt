Nests recursively objects linked to one another in a flat array.

- Use recursion.
- Use `Array.prototype.filter()` to filter the items where the `id` matches the `link`.
- Use `Array.prototype.map()` to map each item to a new object that has a `children` property which recursively nests the items based on which ones are children of the current item.
- Omit the second argument, `id`, to default to `null` which indicates the object is not linked to another one (i.e. it is a top level object).
- Omit the third argument, `link`, to use `'parent_id'` as the default property which links the object to another one by its `id`.