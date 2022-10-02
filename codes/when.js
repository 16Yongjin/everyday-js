const when = (pred, whenTrue) => x => (pred(x) ? whenTrue(x) : x);

// 예시
const doubleEvenNumbers = when(x => x % 2 === 0, x => x * 2);
doubleEvenNumbers(2); // 4
doubleEvenNumbers(1); // 1
