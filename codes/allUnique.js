const allUnique = arr => arr.length === new Set(arr).size;

// 예시
allUnique([1, 2, 3, 4]); // true
allUnique([1, 1, 2, 3]); // false
