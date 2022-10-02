const hasMany = (arr, fn) => arr.filter(fn).length > 1;

// 예시
hasMany([1, 3], x => x % 2); // true
hasMany([1, 2], x => x % 2); // false
