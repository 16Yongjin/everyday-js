const getType = v =>
  (v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name);

// 예시
getType(new Set([1, 2, 3])); // 'Set'
