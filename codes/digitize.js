const digitize = n => [...`${Math.abs(n)}`].map(i => parseInt(i));

// 예시
digitize(123); // [1, 2, 3]
digitize(-123); // [1, 2, 3]
