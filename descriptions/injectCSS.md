Injects the given CSS code into the current document

- Use `Document.createElement()` to create a new `style` element and set its type to `text/css`.
- Use `Element.innerText` to set the value to the given CSS string.
- Use `Document.head` and `Element.appendChild()` to append the new element to the document head.
- Return the newly created `style` element.