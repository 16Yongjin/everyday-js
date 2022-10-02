const all = (arr, fn = Boolean) => arr.every(fn);

// 예시
all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
