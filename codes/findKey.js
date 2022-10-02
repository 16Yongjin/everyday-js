const findKey = (obj, fn) =>
  Object.keys(obj).find(key => fn(obj[key], key, obj));

// 예시
findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  x => x['active']
); // 'barney'
