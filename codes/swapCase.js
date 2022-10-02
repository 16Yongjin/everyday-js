const swapCase = str =>
  [...str]
    .map(c => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
    .join('');

// 예시
swapCase('Hello world!'); // 'hELLO WORLD!'
