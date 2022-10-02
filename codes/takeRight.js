const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

// 예시
takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
