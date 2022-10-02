const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];

// 예시
offset([1, 2, 3, 4, 5], 2); // [3, 4, 5, 1, 2]
offset([1, 2, 3, 4, 5], -2); // [4, 5, 1, 2, 3]
