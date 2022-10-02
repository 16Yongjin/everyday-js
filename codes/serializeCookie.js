const serializeCookie = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

// 예시
serializeCookie('foo', 'bar'); // 'foo=bar'
