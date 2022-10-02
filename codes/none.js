const none = (arr, fn = Boolean) => !arr.some(fn);

// 예시
none([0, 1, 3, 0], x => x == 2); // true
none([0, 0, 0]); // true
