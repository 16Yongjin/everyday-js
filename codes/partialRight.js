const partialRight = (fn, ...partials) => (...args) => fn(...args, ...partials);

// 예시
const greet = (greeting, name) => greeting + ' ' + name + '!';
const greetJohn = partialRight(greet, 'John');
greetJohn('Hello'); // 'Hello John!'
