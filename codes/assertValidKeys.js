const assertValidKeys = (obj, keys) =>
  Object.keys(obj).every(key => keys.includes(key));

// 예시
assertValidKeys({ id: 10, name: 'apple' }, ['id', 'name']); // true
assertValidKeys({ id: 10, name: 'apple' }, ['id', 'type']); // false
