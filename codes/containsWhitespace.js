const containsWhitespace = str => /\s/.test(str);

// 예시
containsWhitespace('lorem'); // false
containsWhitespace('lorem ipsum'); // true
