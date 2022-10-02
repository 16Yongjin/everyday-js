const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));

// 예시
const minMax = over(Math.min, Math.max);
minMax(1, 2, 3, 4, 5); // [1, 5]
