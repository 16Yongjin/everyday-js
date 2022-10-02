Serializes a JSON object containing circular references into a JSON format.

- Create a `WeakSet` to store and check seen values, using `WeakSet.prototype.add()` and `WeakSet.prototype.has()`.
- Use `JSON.stringify()` with a custom replacer function that omits values already in `seen`, adding new values as necessary.
- ⚠️ **NOTICE:** This function finds and removes circular references, which causes circular data loss in the serialized JSON.