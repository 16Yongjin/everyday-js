const spreadOver = fn => argsArr => fn(...argsArr);

// 예시
const arrayMax = spreadOver(Math.max);
arrayMax([1, 2, 3]); // 3
