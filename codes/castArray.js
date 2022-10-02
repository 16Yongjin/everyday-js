const castArray = val => (Array.isArray(val) ? val : [val]);

// 예시
castArray('foo'); // ['foo']
castArray([1]); // [1]
