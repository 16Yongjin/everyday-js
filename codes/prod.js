const prod = (...arr) => [...arr].reduce((acc, val) => acc * val, 1);

// 예시
prod(1, 2, 3, 4); // 24
prod(...[1, 2, 3, 4]); // 24
