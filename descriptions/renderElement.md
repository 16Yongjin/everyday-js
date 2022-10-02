Renders the given DOM tree in the specified DOM element.

- Destructure the first argument into `type` and `props`. Use `type` to determine if the given element is a text element.
- Based on the element's `type`, use either `Document.createTextNode()` or `Document.createElement()` to create the DOM element.
- Use `Object.keys()` to add attributes to the DOM element and set event listeners, as necessary.
- Use recursion to render `props.children`, if any.
- Finally, use `Node.appendChild()` to append the DOM element to the specified `container`.