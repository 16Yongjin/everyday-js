Prefixes a CSS property based on the current browser.

- Use `Array.prototype.findIndex()` on an array of vendor prefix strings to test if `Document.body` has one of them defined in its `CSSStyleDeclaration` object, otherwise return `null`.
- Use `String.prototype.charAt()` and `String.prototype.toUpperCase()` to capitalize the property, which will be appended to the vendor prefix string.