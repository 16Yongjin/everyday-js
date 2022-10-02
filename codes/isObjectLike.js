const isObjectLike = val => val !== null && typeof val === 'object';

// 예시
isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
