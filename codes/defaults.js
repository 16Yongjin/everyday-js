const defaults = (obj, ...defs) =>
  Object.assign({}, obj, ...defs.reverse(), obj);

// 예시
defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
