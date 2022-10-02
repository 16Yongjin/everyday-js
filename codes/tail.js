const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

// 예시
tail([1, 2, 3]); // [2, 3]
tail([1]); // [1]
