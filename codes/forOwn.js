const forOwn = (obj, fn) =>
  Object.keys(obj).forEach(key => fn(obj[key], key, obj));

// 예시
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
