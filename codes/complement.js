const complement = fn => (...args) => !fn(...args);

// 예시
const isEven = num => num % 2 === 0;
const isOdd = complement(isEven);
isOdd(2); // false
isOdd(3); // true
