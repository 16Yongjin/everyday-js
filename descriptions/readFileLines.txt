Returns an array of lines from the specified file.

- Use `fs.readFileSync()` to create a `Buffer` from a file.
- Use `Buffer.prototype.toString()` to covert the buffer to a string.
- Use `String.prototype.split()` to create an array of lines from the contents of the file.