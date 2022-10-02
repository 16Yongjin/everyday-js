const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

// 예시
sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
