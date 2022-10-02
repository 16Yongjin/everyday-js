Unescapes escaped HTML characters.

- Use `String.prototype.replace()` with a regexp that matches the characters that need to be unescaped.
- Use the function's callback to replace each escaped character instance with its associated unescaped character using a dictionary (object).