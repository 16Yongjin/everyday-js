Gets the command-line arguments passed to a Node.js script.

- Use `process.argv` to get an array of all command-line arguments.
- Use `Array.prototype.slice()` to remove the first two elements (path of the Node.js executable and the file being executed).