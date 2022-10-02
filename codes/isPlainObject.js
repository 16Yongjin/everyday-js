const isPlainObject = val =>
  !!val && typeof val === 'object' && val.constructor === Object;

// 예시
isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
