const findLast = (arr, fn) => arr.filter(fn).pop();

// 예시
findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
