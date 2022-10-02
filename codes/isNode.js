const isNode = () =>
  typeof process !== 'undefined' &&
  !!process.versions &&
  !!process.versions.node;

// 예시
isNode(); // true (Node)
isNode(); // false (browser)
