const isNumber = val => typeof val === 'number' && val === val;

// 예시
isNumber(1); // true
isNumber('1'); // false
isNumber(NaN); // false
