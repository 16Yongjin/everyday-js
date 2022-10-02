const indentString = (str, count, indent = ' ') =>
  str.replace(/^/gm, indent.repeat(count));

// 예시
indentString('Lorem\nIpsum', 2); // '  Lorem\n  Ipsum'
indentString('Lorem\nIpsum', 2, '_'); // '__Lorem\n__Ipsum'
