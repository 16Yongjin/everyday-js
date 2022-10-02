const isSameOrigin = (origin, destination) =>
  origin.protocol === destination.protocol && origin.host === destination.host;

// 예시
const origin = new URL('https://www.30secondsofcode.org/about');
const destination = new URL('https://www.30secondsofcode.org/contact');
isSameOrigin(origin, destination); // true
const other = new URL('https://developer.mozilla.org);
isSameOrigin(origin, other); // false
