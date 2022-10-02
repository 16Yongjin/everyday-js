const commonKeys = (obj1, obj2) =>
  Object.keys(obj1).filter(key => obj2.hasOwnProperty(key));

// 예시
commonKeys({ a: 1, b: 2 }, { a: 2, c: 1 }); // ['a']
