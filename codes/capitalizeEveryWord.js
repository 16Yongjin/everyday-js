const capitalizeEveryWord = str =>
  str.replace(/\b[a-z]/g, char => char.toUpperCase());

// 예시
capitalizeEveryWord('hello world!'); // 'Hello World!'
