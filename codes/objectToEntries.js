const objectToEntries = obj => Object.keys(obj).map(k => [k, obj[k]]);

// 예시
objectToEntries({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
