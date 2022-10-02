const hasDuplicates = arr => new Set(arr).size !== arr.length;

// 예시
hasDuplicates([0, 1, 1, 2]); // true
hasDuplicates([0, 1, 2, 3]); // false
