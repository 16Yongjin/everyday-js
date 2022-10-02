const isFunction = val => typeof val === 'function';

// 예시
isFunction('x'); // false
isFunction(x => x); // true
