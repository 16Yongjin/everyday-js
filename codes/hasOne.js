const hasOne = (arr, fn) => arr.filter(fn).length === 1;

// 예시
hasOne([1, 2], x => x % 2); // true
hasOne([1, 3], x => x % 2); // false
