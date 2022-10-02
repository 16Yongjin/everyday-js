Generates a UUID in Node.JS.

- Use `crypto.randomBytes()` to generate a UUID, compliant with [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) version 4.
- Use `Number.prototype.toString()` to convert it to a proper UUID (hexadecimal string).
- [`crypto.randomUUID()`](https://nodejs.org/api/crypto.html#cryptorandomuuidoptions) provides similar functionality.