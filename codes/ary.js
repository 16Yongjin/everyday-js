const ary = (fn, n) => (...args) => fn(...args.slice(0, n));

// 예시
const firstTwoMax = ary(Math.max, 2);
[[2, 6, 'a'], [6, 4, 8], [10]].map(x => firstTwoMax(...x)); // [6, 6, 10]
