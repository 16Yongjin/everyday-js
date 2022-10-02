const mapString = (str, fn) =>
  str
    .split('')
    .map((c, i) => fn(c, i, str))
    .join('');

// 예시
mapString('lorem ipsum', c => c.toUpperCase()); // 'LOREM IPSUM'
