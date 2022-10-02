const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

// 예시
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
